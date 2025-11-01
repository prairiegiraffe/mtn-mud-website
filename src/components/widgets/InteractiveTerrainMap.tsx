import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

// Geographic bounds from heightmapper: centered at 43.386°N, -107.332°W
// Looking at the heightmap, it covers from Pacific Northwest to Great Lakes
// Need to estimate the actual bounds from the visible cities in the image
// The map shows: Seattle/Portland (far left), Salt Lake City (left-center),
// Denver/Kansas (center), Chicago (right), extending north to Canada
const TERRAIN_BOUNDS = {
  west: -125.0,  // Pacific coast (Seattle area)
  east: -90.0,   // Great Lakes (Chicago/Wisconsin)
  north: 50.0,   // Canadian border
  south: 38.0,   // Southern Wyoming/Kansas
};

// Terrain dimensions - make it MUCH wider to match the actual heightmap aspect ratio
// The heightmap appears to be roughly 3:1 width to height
const TERRAIN_WIDTH = 30; // Wide landscape format
const TERRAIN_HEIGHT = 10; // Shorter north-south distance

// MTN Mud location data with terrain coordinates
const locationsData = [
  {
    id: 'williston',
    name: 'Williston, ND',
    badge: null,
    x: 2.6,
    z: -3.4,
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
    x: 1.1,
    z: -0.4,
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
    x: 1.7,
    z: 1.4,
    address: 'Contact us for details',
    phone: '307-682-8688',
    email: null,
    services: ['Drilling fluid supplies', 'Delivery services', 'Technical support'],
    description: 'Serving the southern Wyoming energy corridor',
  },
];

// Store heightmap data globally
let heightmapData: ImageData | null = null;

// Get terrain elevation at x/z position
function getTerrainElevation(x: number, z: number): number {
  if (!heightmapData) return 0.5;

  // Convert terrain coordinates to image coordinates
  const imgX = Math.floor(((x + TERRAIN_WIDTH / 2) / TERRAIN_WIDTH) * heightmapData.width);
  const imgY = Math.floor(((z + TERRAIN_HEIGHT / 2) / TERRAIN_HEIGHT) * heightmapData.height);

  const safeX = Math.max(0, Math.min(heightmapData.width - 1, imgX));
  const safeY = Math.max(0, Math.min(heightmapData.height - 1, imgY));

  const pixelIndex = (safeY * heightmapData.width + safeX) * 4;
  const brightness = heightmapData.data[pixelIndex];

  // Reduce height multiplier - was 3.0, now 1.0 for more realistic terrain
  return (brightness / 255) * 1.0 + 0.3;
}

// Process locations with 3D positions
const locations = locationsData.map((loc) => {
  return {
    ...loc,
    position: [loc.x, 0, loc.z] as [number, number, number],
  };
});

// Animated location marker with glowing effect
function LocationMarker({
  position,
  x,
  z,
  name,
  isActive,
  onClick,
}: {
  position: [number, number, number];
  x: number;
  z: number;
  name: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const markerRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [terrainHeight, setTerrainHeight] = useState(0.5);

  useEffect(() => {
    const checkHeight = () => {
      const height = getTerrainElevation(x, z);
      setTerrainHeight(height);
    };
    checkHeight();
    const interval = setInterval(checkHeight, 100);
    setTimeout(() => clearInterval(interval), 2000);
    return () => clearInterval(interval);
  }, [x, z]);

  useFrame((state) => {
    if (markerRef.current) {
      markerRef.current.position.y = terrainHeight + Math.sin(state.clock.elapsedTime * 2) * 0.15;
    }
    if (glowRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
      glowRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={markerRef} position={position} onClick={onClick}>
      {/* Glowing ring */}
      <mesh ref={glowRef} position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.4, 0.6, 32]} />
        <meshBasicMaterial color="#FF6600" transparent opacity={0.5} />
      </mesh>

      {/* Main marker sphere */}
      <mesh>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial
          color="#FF6600"
          emissive="#FF6600"
          emissiveIntensity={isActive ? 2.5 : 1.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Light beam */}
      <mesh position={[0, 3, 0]}>
        <cylinderGeometry args={[0.02, 0.08, 6, 16]} />
        <meshBasicMaterial color="#FF6600" transparent opacity={0.4} />
      </mesh>

      {/* Point light */}
      <pointLight color="#FF6600" intensity={isActive ? 4 : 2} distance={8} />

      {/* Location label */}
      <Html position={[0, 1.2, 0]} center>
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.85)',
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
          {name}
        </div>
      </Html>
    </group>
  );
}

// Terrain component with heightmap
function Terrain() {
  const terrainRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = '/heightmapper-1762013079272.png';

    img.onload = () => {
      if (!terrainRef.current) return;

      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Flip the image horizontally so west (Rockies) is on the left
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      heightmapData = imageData;

      console.log('🗺️ Heightmap loaded (flipped horizontally):', img.width, 'x', img.height);

      const geometry = terrainRef.current.geometry as THREE.PlaneGeometry;
      const positionAttribute = geometry.getAttribute('position');

      for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);

        // Map terrain mesh coordinates back to lat/long
        const long = TERRAIN_BOUNDS.west + ((x + TERRAIN_WIDTH / 2) / TERRAIN_WIDTH) * (TERRAIN_BOUNDS.east - TERRAIN_BOUNDS.west);
        const lat = TERRAIN_BOUNDS.south + ((TERRAIN_HEIGHT / 2 - y) / TERRAIN_HEIGHT) * (TERRAIN_BOUNDS.north - TERRAIN_BOUNDS.south);

        // Map lat/long to heightmap pixel
        const imgX = Math.floor(((long - TERRAIN_BOUNDS.west) / (TERRAIN_BOUNDS.east - TERRAIN_BOUNDS.west)) * img.width);
        const imgY = Math.floor(((TERRAIN_BOUNDS.north - lat) / (TERRAIN_BOUNDS.north - TERRAIN_BOUNDS.south)) * img.height);

        const safeX = Math.max(0, Math.min(img.width - 1, imgX));
        const safeY = Math.max(0, Math.min(img.height - 1, imgY));

        const pixelIndex = (safeY * img.width + safeX) * 4;
        const brightness = imageData.data[pixelIndex];

        // Much lower height multiplier for realistic terrain (was 3.0, now 1.0)
        const height = (brightness / 255) * 1.0;

        positionAttribute.setZ(i, height);
      }

      positionAttribute.needsUpdate = true;
      geometry.computeVertexNormals();
    };

    img.onerror = () => {
      console.error('Failed to load heightmap');
    };
  }, []);

  return (
    <>
      {/* Main terrain */}
      <mesh ref={terrainRef} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[TERRAIN_WIDTH, TERRAIN_HEIGHT, 150, 100]} />
        <meshStandardMaterial
          color="#8B7355"
          metalness={0.15}
          roughness={0.85}
          emissive="#4A3A2A"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <planeGeometry args={[TERRAIN_WIDTH, TERRAIN_HEIGHT, 60, 40]} />
        <meshBasicMaterial color="#FF6600" wireframe opacity={0.2} transparent />
      </mesh>

      {/* Grid helper - wider to match landscape terrain */}
      <gridHelper args={[50, 50, '#6B5B4B', '#3A2A1A']} position={[0, -0.5, 0]} />

      {/* DEBUG: Clear coordinate grid flat on terrain */}
      {/* Draw grid lines on the terrain surface */}
      {Array.from({ length: 31 }, (_, i) => {
        const x = -15 + i * 1;
        return (
          <group key={`vline-${i}`}>
            {/* Vertical grid line (north-south) */}
            <mesh position={[x, 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[0.08, TERRAIN_HEIGHT]} />
              <meshBasicMaterial
                color={i % 5 === 0 ? "#00FFFF" : "#0088AA"}
                opacity={i % 5 === 0 ? 0.8 : 0.4}
                transparent
                side={THREE.DoubleSide}
              />
            </mesh>
            {/* X-axis labels */}
            {i % 5 === 0 && (
              <Html position={[x, 2, -TERRAIN_HEIGHT/2 - 0.5]} center>
                <div style={{
                  color: '#00FFFF',
                  fontSize: '16px',
                  fontWeight: 900,
                  background: 'rgba(0,0,0,0.9)',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  border: '2px solid #00FFFF',
                  whiteSpace: 'nowrap'
                }}>
                  X: {x}
                </div>
              </Html>
            )}
          </group>
        );
      })}

      {/* Horizontal lines (Z-axis) every 1 unit */}
      {Array.from({ length: 11 }, (_, i) => {
        const z = -5 + i * 1;
        return (
          <group key={`hline-${i}`}>
            {/* Horizontal grid line (west-east) */}
            <mesh position={[0, 2, z]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[TERRAIN_WIDTH, 0.08]} />
              <meshBasicMaterial
                color={i % 2 === 0 ? "#00FF00" : "#008800"}
                opacity={i % 2 === 0 ? 0.8 : 0.4}
                transparent
                side={THREE.DoubleSide}
              />
            </mesh>
            {/* Z-axis labels */}
            {i % 2 === 0 && (
              <Html position={[-TERRAIN_WIDTH/2 - 0.5, 2, z]} center>
                <div style={{
                  color: '#00FF00',
                  fontSize: '16px',
                  fontWeight: 900,
                  background: 'rgba(0,0,0,0.9)',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  border: '2px solid #00FF00',
                  whiteSpace: 'nowrap'
                }}>
                  Z: {z}
                </div>
              </Html>
            )}
          </group>
        );
      })}

      {/* Origin marker */}
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#FF0000" />
      </mesh>
      <Html position={[0, 3, 0]} center>
        <div style={{
          color: '#FF0000',
          fontSize: '18px',
          fontWeight: 900,
          background: 'rgba(0,0,0,0.9)',
          padding: '8px 12px',
          borderRadius: '8px',
          border: '3px solid #FF0000'
        }}>
          ORIGIN (0,0)
        </div>
      </Html>
    </>
  );
}

// Info card component
function InfoCard({ location }: { location: (typeof locations)[0] }) {
  return (
    <Html position={[location.position[0], location.position[1] + 3, location.position[2]]} center>
      <div
        style={{
          background: 'white',
          borderRadius: '16px',
          padding: '24px',
          minWidth: '320px',
          maxWidth: '360px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
          fontFamily: 'Roboto, sans-serif',
          border: '3px solid #FF6600',
          pointerEvents: 'auto',
        }}
      >
        {location.badge && (
          <div
            style={{
              display: 'inline-block',
              background: '#FF6600',
              color: 'white',
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '10px',
              fontWeight: 900,
              letterSpacing: '1.5px',
              marginBottom: '16px',
            }}
          >
            {location.badge}
          </div>
        )}

        <h3
          style={{
            fontSize: '24px',
            fontWeight: 900,
            color: '#FF6600',
            margin: '0 0 8px 0',
          }}
        >
          {location.name}
        </h3>

        <p
          style={{
            color: '#666',
            fontSize: '14px',
            fontStyle: 'italic',
            marginBottom: '16px',
          }}
        >
          {location.description}
        </p>

        <div style={{ marginBottom: '14px', color: '#4A4A4A', lineHeight: '1.6' }}>
          <strong
            style={{
              display: 'block',
              color: '#1A1A1A',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '6px',
            }}
          >
            Address
          </strong>
          <div dangerouslySetInnerHTML={{ __html: location.address }} />
        </div>

        <div style={{ marginBottom: '14px' }}>
          <strong
            style={{
              display: 'block',
              color: '#1A1A1A',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '6px',
            }}
          >
            Phone
          </strong>
          <a
            href={`tel:${location.phone}`}
            style={{
              color: '#FF6600',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '15px',
            }}
          >
            {location.phone}
          </a>
        </div>

        {location.email && (
          <div style={{ marginBottom: '14px' }}>
            <strong
              style={{
                display: 'block',
                color: '#1A1A1A',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '6px',
              }}
            >
              Email
            </strong>
            <a
              href={`mailto:${location.email}`}
              style={{
                color: '#FF6600',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '14px',
              }}
            >
              {location.email}
            </a>
          </div>
        )}

        <div
          style={{
            background: '#FFF5F0',
            padding: '16px',
            borderRadius: '12px',
            marginTop: '16px',
          }}
        >
          <strong
            style={{
              display: 'block',
              color: '#1A1A1A',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '10px',
            }}
          >
            Services
          </strong>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {location.services.map((service, idx) => (
              <li
                key={idx}
                style={{
                  color: '#4A4A4A',
                  fontSize: '13px',
                  marginBottom: '6px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: '#FF6600', marginRight: '10px', fontSize: '16px' }}>✓</span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Html>
  );
}

// Flying camera controller with smooth transitions
function FlyingCamera({ targetLocation }: { targetLocation: (typeof locations)[0] | null }) {
  const { camera } = useThree();
  const targetPosRef = useRef(new THREE.Vector3(0, 10, -18));
  const currentPosRef = useRef(new THREE.Vector3(0, 10, -18));
  const lookAtRef = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    if (targetLocation) {
      const height = getTerrainElevation(targetLocation.x, targetLocation.z);
      const cameraHeight = height + 4;

      targetPosRef.current.set(
        targetLocation.position[0] + 4,
        cameraHeight,
        targetLocation.position[2] - 6
      );

      lookAtRef.current.set(
        targetLocation.position[0],
        height,
        targetLocation.position[2]
      );
    } else {
      // Default overview position - viewing from south looking north
      targetPosRef.current.set(0, 10, -18);
      lookAtRef.current.set(0, 0.5, 0);
    }
  }, [targetLocation]);

  useFrame(() => {
    // Smooth flying motion with easing
    currentPosRef.current.lerp(targetPosRef.current, 0.03);
    camera.position.copy(currentPosRef.current);

    // Smooth look-at transition
    const currentLookAt = new THREE.Vector3();
    camera.getWorldDirection(currentLookAt);
    currentLookAt.multiplyScalar(10).add(camera.position);
    currentLookAt.lerp(lookAtRef.current, 0.03);
    camera.lookAt(currentLookAt);
  });

  return null;
}

// Main scene component
function Scene() {
  const [activeLocation, setActiveLocation] = useState<(typeof locations)[0] | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const autoPlayIndex = useRef(0);

  // Auto-play through locations
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      autoPlayIndex.current = (autoPlayIndex.current + 1) % locations.length;
      setActiveLocation(locations[autoPlayIndex.current]);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={2.2} />
      <directionalLight position={[10, 20, 10]} intensity={1.8} castShadow />
      <directionalLight position={[-10, 15, -5]} intensity={1.3} />
      <hemisphereLight color="#ffffff" groundColor="#8B7355" intensity={1.8} />
      <pointLight position={[0, 15, 0]} intensity={1.2} color="#FFE5CC" />

      {/* Terrain */}
      <Terrain />

      {/* Location markers */}
      {locations.map((location) => (
        <LocationMarker
          key={location.id}
          position={location.position}
          x={location.x}
          z={location.z}
          name={location.name}
          isActive={activeLocation?.id === location.id}
          onClick={() => {
            setActiveLocation(location);
            setIsAutoPlaying(false);
          }}
        />
      ))}

      {/* Info card */}
      {activeLocation && <InfoCard location={activeLocation} />}

      {/* Flying camera */}
      <FlyingCamera targetLocation={activeLocation} />

      {/* Control panel */}
      <Html position={[0, 0, 0]} center>
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: 'rgba(0, 0, 0, 0.9)',
            padding: '16px',
            borderRadius: '12px',
            border: '2px solid #FF6600',
            zIndex: 1000,
          }}
        >
          <div style={{
            color: '#00FFFF',
            fontSize: '12px',
            marginBottom: '12px',
            padding: '8px',
            background: 'rgba(0, 255, 255, 0.1)',
            borderRadius: '6px',
            border: '1px solid #00FFFF'
          }}>
            <strong>DEBUG MODE</strong><br/>
            Grid overlay enabled<br/>
            Scroll down for top-down view
          </div>
          <button
            onClick={() => {
              setIsAutoPlaying(!isAutoPlaying);
              if (!isAutoPlaying) {
                autoPlayIndex.current = 0;
                setActiveLocation(locations[0]);
              }
            }}
            style={{
              background: '#FF6600',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: 900,
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            {isAutoPlaying ? '⏸ Pause Tour' : '▶ Start Tour'}
          </button>

          {activeLocation && (
            <button
              onClick={() => setActiveLocation(null)}
              style={{
                background: '#333',
                color: 'white',
                border: '1px solid #666',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '11px',
                cursor: 'pointer',
                marginTop: '8px',
                width: '100%',
              }}
            >
              ← Back to Overview
            </button>
          )}
        </div>
      </Html>
    </>
  );
}

// Simple top-down scene
function TopDownScene() {
  return (
    <>
      <ambientLight intensity={3} />
      <directionalLight position={[0, 20, 0]} intensity={3} />

      {/* Terrain */}
      <Terrain />

      {/* Location markers */}
      {locations.map((location) => (
        <LocationMarker
          key={location.id}
          position={location.position}
          x={location.x}
          z={location.z}
          name={location.name}
          isActive={false}
          onClick={() => {}}
        />
      ))}

      {/* Big test box to verify view is working */}
      <mesh position={[5, 3, 0]}>
        <boxGeometry args={[2, 0.5, 2]} />
        <meshStandardMaterial color="#FF00FF" />
      </mesh>
      <Html position={[5, 3.5, 0]} center>
        <div style={{
          color: '#FF00FF',
          fontSize: '20px',
          fontWeight: 900,
          background: 'black',
          padding: '10px',
          border: '3px solid #FF00FF'
        }}>
          TEST MARKER
        </div>
      </Html>
    </>
  );
}

// Top-down reference view component
function TopDownReferenceView() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '700px', marginTop: '40px', border: '4px solid #00FFFF' }}>
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0, 0, 0, 0.9)',
        color: '#00FFFF',
        padding: '12px 24px',
        borderRadius: '12px',
        border: '3px solid #00FFFF',
        zIndex: 10,
        fontSize: '18px',
        fontWeight: 900
      }}>
        📍 TOP-DOWN REFERENCE VIEW - Tell me the X, Z coordinates for each town
      </div>
      <Canvas
        camera={{
          position: [0, 20, 0],
          left: -20,
          right: 20,
          top: 10,
          bottom: -10,
          near: 0.1,
          far: 100
        }}
        orthographic
        style={{ background: '#1a1a1a' }}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0, 0);
          camera.updateProjectionMatrix();
        }}
      >
        <TopDownScene />
      </Canvas>

      {/* Legend */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        background: 'rgba(0, 0, 0, 0.9)',
        padding: '16px',
        borderRadius: '12px',
        border: '2px solid #fff',
        color: 'white',
        fontSize: '14px',
        zIndex: 10
      }}>
        <div style={{marginBottom: '8px'}}><span style={{color: '#00FFFF'}}>━━</span> X-axis (West-East)</div>
        <div style={{marginBottom: '8px'}}><span style={{color: '#00FF00'}}>━━</span> Z-axis (South-North)</div>
        <div style={{marginBottom: '8px'}}><span style={{color: '#FF0000'}}>●</span> Origin (0,0)</div>
        <div><span style={{color: '#FF6600'}}>●</span> Towns (current position)</div>
      </div>
    </div>
  );
}

// Main export
export default function InteractiveTerrainMap() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1200);
  }, []);

  return (
    <>
      {/* Main 3D angled view */}
      <div style={{ position: 'relative', width: '100%', height: '700px' }}>
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
            zIndex: 10,
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
        camera={{ position: [0, 10, -18], fov: 65 }}
        shadows
        style={{ background: 'linear-gradient(to bottom, #1A2A3A 0%, #2A3A4A 100%)' }}
      >
        <Scene />
      </Canvas>

      {/* Instructions */}
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
        Click markers to fly to locations • Start Tour for automatic flyover
      </div>
      </div>

      {/* Top-down reference view */}
      <TopDownReferenceView />
    </>
  );
}
