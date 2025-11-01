import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Heightmap aspect ratio (px) to keep north/south scaling accurate
const HEIGHTMAP_WIDTH_PX = 1517;
const HEIGHTMAP_HEIGHT_PX = 1119;
const HEIGHTMAP_ASPECT = HEIGHTMAP_HEIGHT_PX / HEIGHTMAP_WIDTH_PX;

// Simple terrain dimensions sized for the cropped map
const TERRAIN_WIDTH = 60;
const TERRAIN_HEIGHT = TERRAIN_WIDTH * HEIGHTMAP_ASPECT;
const HEIGHT_SCALE = 0.5;

type Town = {
  id: string;
  name: string;
  badge: string | null;
  x: number;
  z: number;
  address: string;
  phone: string;
  email: string | null;
  services: readonly string[];
  description: string;
};

const towns: readonly Town[] = [
  {
    id: 'williston',
    name: 'Williston, ND',
    badge: null,
    x: -5.8,
    z: -7.3,
    address: 'Contact us for details',
    phone: '307-682-8688',
    email: null,
    services: ['Full functional mud lab', 'Particle size analysis', 'Drilling fluid supplies'],
    description: 'Supporting operations in the Bakken formation',
  },
  {
    id: 'gillette',
    name: 'Gillette, WY',
    badge: 'HEADQUARTERS',
    x: -7.6,
    z: -2.9,
    address: '103 E. Lincoln St.<br/>Gillette, WY 82716',
    phone: '307-682-8688',
    email: 'alicia@kutthru.com',
    services: ['Full mud engineering', '24/7 delivery', 'Mud lab', 'Technical support'],
    description: 'Our headquarters in the heart of the Powder River Basin',
  },
  {
    id: 'cheyenne',
    name: 'Cheyenne, WY',
    badge: null,
    x: -6.9,
    z: 0.5,
    address: 'Contact us for details',
    phone: '307-682-8688',
    email: null,
    services: ['Drilling fluid supplies', 'Delivery services', 'Technical support'],
    description: 'Serving the southern Wyoming energy corridor',
  },
] as const;

const DEFAULT_CAMERA_POSITION = new THREE.Vector3(-12, 7, -10);
const DEFAULT_CAMERA_TARGET = new THREE.Vector3(5, 2.5, 0.5);

// Store heightmap globally
let heightmapData: ImageData | null = null;

// Get terrain height at position
function getHeight(x: number, z: number): number {
  if (!heightmapData) return 0.5;

  // Convert world position to image coordinates
  const u = (x + TERRAIN_WIDTH / 2) / TERRAIN_WIDTH;
  const v = (z + TERRAIN_HEIGHT / 2) / TERRAIN_HEIGHT;

  const imgX = Math.floor(u * heightmapData.width);
  const imgY = Math.floor(v * heightmapData.height);

  const safeX = Math.max(0, Math.min(heightmapData.width - 1, imgX));
  const safeY = Math.max(0, Math.min(heightmapData.height - 1, imgY));

  const pixelIndex = (safeY * heightmapData.width + safeX) * 4;
  const brightness = heightmapData.data[pixelIndex];

  return (brightness / 255) * HEIGHT_SCALE;
}

// Terrain mesh with heightmap texture
function Terrain() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [heightTexture, setHeightTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = `/heightmap-north-america-cropped.png?v=${Date.now()}`;

    img.onload = () => {
      if (!meshRef.current) return;

      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      heightmapData = ctx.getImageData(0, 0, img.width, img.height);

      console.log('✅ Heightmap loaded:', img.width, 'x', img.height);

      // Create colorized texture from heightmap
      const colorCanvas = document.createElement('canvas');
      colorCanvas.width = img.width;
      colorCanvas.height = img.height;
      const colorCtx = colorCanvas.getContext('2d');
      if (!colorCtx) return;

      // Draw heightmap
      colorCtx.drawImage(img, 0, 0);
      const imageData = colorCtx.getImageData(0, 0, img.width, img.height);

      // Colorize based on elevation with extra contrast
      const { width, height } = imageData;
      const tmpColor = new THREE.Color();

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = (y * width + x) * 4;
          const sample = heightmapData.data[idx] / 255;

          const elevation = Math.pow(sample, 0.95);
          const hue = THREE.MathUtils.lerp(0.36, 0.03, elevation);
          const sat = THREE.MathUtils.lerp(0.7, 0.5, elevation);
          const light = THREE.MathUtils.lerp(0.32, 0.82, elevation);

          tmpColor.setHSL(hue, sat, light);
          let r = tmpColor.r * 255;
          let g = tmpColor.g * 255;
          let b = tmpColor.b * 255;

          // Simple slope-based shading for extra definition
          const leftIdx = (y * width + Math.max(x - 1, 0)) * 4;
          const rightIdx = (y * width + Math.min(x + 1, width - 1)) * 4;
          const upIdx = (Math.max(y - 1, 0) * width + x) * 4;
          const downIdx = (Math.min(y + 1, height - 1) * width + x) * 4;

          const dx = (heightmapData.data[rightIdx] - heightmapData.data[leftIdx]) / 255;
          const dy = (heightmapData.data[downIdx] - heightmapData.data[upIdx]) / 255;

          const slope = Math.sqrt(dx * dx + dy * dy);
          const shade = THREE.MathUtils.clamp(1.22 - slope * 2.4 + elevation * 0.4, 0.85, 1.35);

          r = THREE.MathUtils.clamp(r * shade, 0, 255);
          g = THREE.MathUtils.clamp(g * shade, 0, 255);
          b = THREE.MathUtils.clamp(b * shade, 0, 255);

          imageData.data[idx] = Math.round(r);
          imageData.data[idx + 1] = Math.round(g);
          imageData.data[idx + 2] = Math.round(b);
        }
      }

      colorCtx.putImageData(imageData, 0, 0);
      console.log('🎨 Colorized sample:', imageData.data[0], imageData.data[1], imageData.data[2]);
      console.log('✅ Colorized texture created');

      const texture = new THREE.CanvasTexture(colorCanvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.flipY = false; // THREE.js flips textures by default, we want it NOT flipped
      texture.anisotropy = 8;
      texture.needsUpdate = true;
      setHeightTexture(texture);

      // Apply heights to terrain geometry
      const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
      const positionAttr = geometry.getAttribute('position');

      for (let i = 0; i < positionAttr.count; i++) {
        const x = positionAttr.getX(i);
        const planeY = positionAttr.getY(i);
        const worldZ = -planeY; // plane is rotated -90° around X, so local +Y maps to world -Z

        const height = getHeight(x, worldZ);
        positionAttr.setZ(i, height);
      }

      positionAttr.needsUpdate = true;
      geometry.computeVertexNormals();
    };
  }, []);

  return (
    <>
      {/* Main terrain with colorized heightmap texture */}
      <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} receiveShadow castShadow>
        <planeGeometry args={[TERRAIN_WIDTH, TERRAIN_HEIGHT, 250, 150]} />
        {heightTexture ? (
          <meshStandardMaterial map={heightTexture} metalness={0} roughness={0.95} />
        ) : (
          <meshStandardMaterial color="#8B7355" metalness={0.15} roughness={0.85} />
        )}
      </mesh>
    </>
  );
}

// Town marker
function TownMarker({ town, isActive, onClick }: { town: Town; isActive: boolean; onClick: () => void }) {
  const markerRef = useRef<THREE.Group>(null);
  const [height, setHeight] = useState(0.5);

  useEffect(() => {
    const checkHeight = () => {
      const h = getHeight(town.x, town.z);
      setHeight(h);
    };
    checkHeight();
    const interval = setInterval(checkHeight, 100);
    setTimeout(() => clearInterval(interval), 2000);
    return () => clearInterval(interval);
  }, [town.x, town.z]);

  useFrame((state) => {
    if (markerRef.current) {
      markerRef.current.position.y = height + Math.sin(state.clock.elapsedTime * 2) * 0.1 + 0.5;
    }
  });

  return (
    <group ref={markerRef} position={[town.x, height + 0.5, town.z]} onClick={onClick}>
      {/* Glowing sphere - SMALLER */}
      <mesh>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial
          color="#FF6600"
          emissive="#FF6600"
          emissiveIntensity={isActive ? 2.5 : 1.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Light */}
      <pointLight color="#FF6600" intensity={isActive ? 6 : 3} distance={12} />

      {/* Label */}
      <Html position={[0, 1, 0]} center>
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '8px',
            fontSize: '11px',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            whiteSpace: 'nowrap',
            border: '2px solid #FF6600',
            boxShadow: '0 4px 20px rgba(255, 102, 0, 0.5)',
            pointerEvents: 'none',
          }}
        >
          {town.name}
        </div>
      </Html>
    </group>
  );
}

// Camera rig with orbit controls and smooth fly-to-town animation
function CameraRig({ activeTown }: { activeTown: Town | null }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const controlsRef = useRef<any>(null);
  const { camera } = useThree();
  const animation = useRef({
    isAnimating: false,
    progress: 0,
    startPos: new THREE.Vector3(),
    startTarget: new THREE.Vector3(),
    endPos: new THREE.Vector3(),
    endTarget: new THREE.Vector3(),
  });

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    camera.position.copy(DEFAULT_CAMERA_POSITION);
    controls.target.copy(DEFAULT_CAMERA_TARGET);
    controls.update();
  }, [camera]);

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    animation.current.startPos.copy(camera.position);
    animation.current.startTarget.copy(controls.target);

    if (activeTown) {
      const h = getHeight(activeTown.x, activeTown.z);
      animation.current.endPos.set(activeTown.x - 3.5, h + 2.5, activeTown.z - 3.5);
      animation.current.endTarget.set(activeTown.x, h + 0.5, activeTown.z);
    } else {
      animation.current.endPos.copy(DEFAULT_CAMERA_POSITION);
      animation.current.endTarget.copy(DEFAULT_CAMERA_TARGET);
    }

    animation.current.progress = 0;
    animation.current.isAnimating = true;
  }, [activeTown, camera]);

  useFrame((_, delta) => {
    const controls = controlsRef.current;
    if (!controls) return;

    if (animation.current.isAnimating) {
      animation.current.progress = Math.min(1, animation.current.progress + delta * 0.7);
      const eased = 1 - Math.pow(1 - animation.current.progress, 3);

      camera.position.lerpVectors(animation.current.startPos, animation.current.endPos, eased);
      controls.target.lerpVectors(animation.current.startTarget, animation.current.endTarget, eased);
      controls.update();

      if (animation.current.progress >= 1) {
        animation.current.isAnimating = false;
      }
    } else {
      controls.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enableDamping
      dampingFactor={0.08}
      enablePan={false}
      minDistance={6}
      maxDistance={80}
      minPolarAngle={Math.PI / 5}
      maxPolarAngle={(Math.PI * 0.95) / 2}
    />
  );
}

// Main scene
function Scene({ activeTown, setActiveTown }: { activeTown: Town | null; setActiveTown: (town: Town | null) => void }) {
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const autoPlayIndex = useRef(0);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      autoPlayIndex.current = (autoPlayIndex.current + 1) % towns.length;
      setActiveTown(towns[autoPlayIndex.current]);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, setActiveTown]);

  return (
    <>
      {/* Enhanced lighting for better terrain visibility */}
      <ambientLight intensity={1.8} />
      <directionalLight position={[10, 20, 10]} intensity={2.5} castShadow />
      <directionalLight position={[-10, 15, -5]} intensity={1.8} />
      <directionalLight position={[0, 10, -20]} intensity={1.2} />
      <hemisphereLight color="#ffffff" groundColor="#4A3A2A" intensity={2} />
      <pointLight position={[0, 30, 0]} intensity={1.5} color="#FFE5CC" distance={100} />

      {/* Terrain */}
      <Terrain />

      {/* Towns */}
      {towns.map((town) => (
        <TownMarker
          key={town.id}
          town={town}
          isActive={activeTown?.id === town.id}
          onClick={() => {
            setActiveTown(town);
            setIsAutoPlaying(false);
          }}
        />
      ))}

      {/* Camera */}
      <CameraRig activeTown={activeTown} />
    </>
  );
}

// Sidebar location list
function LocationSidebar({
  activeTown,
  onSelectTown,
}: {
  activeTown: Town | null;
  onSelectTown: (town: Town) => void;
}) {
  return (
    <div
      style={{
        position: 'fixed',
        right: 0,
        top: 0,
        width: '400px',
        height: '100vh',
        background: 'rgba(26, 26, 26, 0.95)',
        backdropFilter: 'blur(10px)',
        borderLeft: '3px solid #FF6600',
        zIndex: 1000,
        overflowY: 'auto',
        padding: '30px',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <h2
        style={{
          color: '#FF6600',
          fontSize: '28px',
          fontWeight: 900,
          marginTop: 0,
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        Our Locations
      </h2>
      <p style={{ color: '#999', fontSize: '14px', marginBottom: '30px' }}>Click a location to fly there</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {towns.map((town) => {
          const isActive = activeTown?.id === town.id;

          return (
            <div
              key={town.id}
              onClick={() => onSelectTown(town)}
              style={{
                background: isActive ? 'rgba(255, 102, 0, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                border: isActive ? '2px solid #FF6600' : '2px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = '#FF6600';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }
              }}
            >
              {town.badge && (
                <div
                  style={{
                    display: 'inline-block',
                    background: '#FF6600',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '9px',
                    fontWeight: 900,
                    letterSpacing: '1px',
                    marginBottom: '10px',
                  }}
                >
                  {town.badge}
                </div>
              )}

              <h3
                style={{
                  color: isActive ? '#FF6600' : 'white',
                  fontSize: '20px',
                  fontWeight: 900,
                  margin: '0 0 8px 0',
                }}
              >
                {town.name}
              </h3>

              {isActive && (
                <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <p style={{ color: '#AAA', fontSize: '13px', fontStyle: 'italic', marginBottom: '15px' }}>
                    {town.description}
                  </p>

                  <div style={{ marginBottom: '12px' }}>
                    <div
                      style={{
                        color: '#FF6600',
                        fontSize: '10px',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '5px',
                      }}
                    >
                      Address
                    </div>
                    <div
                      style={{ color: '#CCC', fontSize: '13px', lineHeight: '1.5' }}
                      dangerouslySetInnerHTML={{ __html: town.address }}
                    />
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <div
                      style={{
                        color: '#FF6600',
                        fontSize: '10px',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '5px',
                      }}
                    >
                      Phone
                    </div>
                    <a
                      href={`tel:${town.phone}`}
                      style={{
                        color: '#FFF',
                        fontSize: '14px',
                        fontWeight: 700,
                        textDecoration: 'none',
                      }}
                    >
                      {town.phone}
                    </a>
                  </div>

                  {town.email && (
                    <div style={{ marginBottom: '12px' }}>
                      <div
                        style={{
                          color: '#FF6600',
                          fontSize: '10px',
                          fontWeight: 900,
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          marginBottom: '5px',
                        }}
                      >
                        Email
                      </div>
                      <a
                        href={`mailto:${town.email}`}
                        style={{
                          color: '#FFF',
                          fontSize: '13px',
                          fontWeight: 700,
                          textDecoration: 'none',
                        }}
                      >
                        {town.email}
                      </a>
                    </div>
                  )}

                  <div style={{ marginTop: '15px' }}>
                    <div
                      style={{
                        color: '#FF6600',
                        fontSize: '10px',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '8px',
                      }}
                    >
                      Services
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                      {town.services.map((service, idx) => (
                        <li
                          key={idx}
                          style={{
                            color: '#CCC',
                            fontSize: '12px',
                            marginBottom: '5px',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <span style={{ color: '#FF6600', marginRight: '8px' }}>✓</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Main component - FULLSCREEN
export default function SimpleTerrainMap() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTown, setActiveTown] = useState<Town | null>(null);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1200);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            color: '#FF6600',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '20px',
            fontWeight: 900,
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>🗺️</div>
            <div>Loading 3D Terrain...</div>
          </div>
        </div>
      )}

      <Canvas
        camera={{ position: [-12, 7, -10], fov: 55 }}
        shadows
        style={{ background: 'linear-gradient(to bottom, #1A2A3A 0%, #2A3A4A 100%)' }}
      >
        <Scene activeTown={activeTown} setActiveTown={setActiveTown} />
      </Canvas>

      {/* Sidebar */}
      <LocationSidebar activeTown={activeTown} onSelectTown={setActiveTown} />

      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(0, 0, 0, 0.9)',
          color: 'white',
          padding: '14px 24px',
          borderRadius: '12px',
          fontFamily: 'Roboto, sans-serif',
          fontSize: '13px',
          fontWeight: 700,
          textAlign: 'center',
          border: '2px solid #FF6600',
          pointerEvents: 'none',
        }}
      >
        Click markers to fly to locations
      </div>
    </div>
  );
}
