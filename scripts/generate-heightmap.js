// Generate a realistic heightmap for Wyoming/North Dakota
// This creates a grayscale PNG where brightness = elevation
// Based on actual geography: Rockies in west, plains in east

import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WIDTH = 512;
const HEIGHT = 512;

const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext('2d');

// Fill with base elevation (Great Plains - medium gray)
ctx.fillStyle = '#606060';
ctx.fillRect(0, 0, WIDTH, HEIGHT);

const imageData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
const data = imageData.data;

// Generate terrain based on real geography
for (let y = 0; y < HEIGHT; y++) {
  for (let x = 0; x < WIDTH; x++) {
    const idx = (y * WIDTH + x) * 4;

    // Normalize coordinates (0-1)
    const nx = x / WIDTH;
    const ny = y / HEIGHT;

    // Start with base plains elevation (medium-low)
    let elevation = 100;

    // Rocky Mountains (western edge, left side of image)
    // Wyoming's western border has high peaks
    if (nx < 0.3) {
      const mountainHeight = (1 - nx / 0.3) * 120; // Higher toward west
      elevation += mountainHeight;

      // Add mountain peaks and valleys
      elevation += Math.sin(nx * 50) * 20;
      elevation += Math.cos(ny * 40) * 15;
    }

    // Powder River Basin (central-eastern Wyoming)
    // Moderate rolling terrain
    if (nx > 0.3 && nx < 0.7 && ny > 0.4 && ny < 0.8) {
      elevation += Math.sin(nx * 10) * 10 + Math.cos(ny * 10) * 10;
    }

    // Badlands (western North Dakota - northern part of map)
    // Rugged terrain in northwest
    if (ny < 0.4 && nx > 0.4 && nx < 0.8) {
      elevation += Math.sin(nx * 30 + ny * 30) * 15;
      elevation += Math.random() * 10;
    }

    // Great Plains (eastern areas)
    // Very gradual slope downward to the east
    if (nx > 0.7) {
      elevation -= (nx - 0.7) * 20;
    }

    // Add subtle noise for realism
    elevation += (Math.random() - 0.5) * 5;

    // Clamp to 0-255
    elevation = Math.max(0, Math.min(255, elevation));

    // Set RGB to same value (grayscale)
    data[idx] = elevation; // R
    data[idx + 1] = elevation; // G
    data[idx + 2] = elevation; // B
    data[idx + 3] = 255; // A
  }
}

ctx.putImageData(imageData, 0, 0);

// Save to public folder
const outputPath = path.join(__dirname, '..', 'public', 'heightmap-wyoming-nd.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outputPath, buffer);

console.log('✅ Heightmap generated:', outputPath);
