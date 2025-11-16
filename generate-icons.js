import fs from 'fs';
import path from 'path';

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconBase = `<svg width="{size}" height="{size}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#037d7b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#059b98;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="512" height="512" rx="75" fill="url(#grad)"/>
  
  <!-- Main text "100%" -->
  <text x="256" y="280" font-family="Poppins, sans-serif" font-size="120" font-weight="bold" fill="white" text-anchor="middle">100%</text>
  
  <!-- Subtitle "ACADEMY" -->
  <text x="256" y="350" font-family="Poppins, sans-serif" font-size="40" fill="white" text-anchor="middle" opacity="0.9">ACADEMY</text>
  
  <!-- Accent circle -->
  <circle cx="420" cy="120" r="25" fill="#ff4f8b"/>
</svg>`;

// Générer les icônes SVG pour chaque taille
sizes.forEach(size => {
  const svg = iconBase.replace(/{size}/g, size);
  const filename = `icon-${size}x${size}.svg`;
  const filepath = path.join('public', 'icons', filename);
  
  fs.writeFileSync(filepath, svg);
  console.log(`Generated: ${filename}`);
});

console.log('Toutes les icônes SVG ont été générées!');