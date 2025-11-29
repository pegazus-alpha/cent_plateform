import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Chemin vers votre PNG source
const sourcePng = path.join('public', 'logo.png');

// Créer le dossier icons s'il n'existe pas
const iconsDir = path.join('public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Générer les icônes PNG pour chaque taille
async function generateIcons() {
  // Vérifier que le fichier source existe
  if (!fs.existsSync(sourcePng)) {
    console.error(`❌ Fichier source introuvable: ${sourcePng}`);
    console.log('💡 Placez votre PNG dans public/logo.png');
    return;
  }

  for (const size of sizes) {
    const filename = `icon-${size}x${size}.png`;
    const filepath = path.join(iconsDir, filename);
    
    try {
      await sharp(sourcePng)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 } // Fond blanc
        })
        .png()
        .toFile(filepath);
      
      console.log(`✅ Generated: ${filename}`);
    } catch (error) {
      console.error(`❌ Error generating ${filename}:`, error.message);
    }
  }
  
  console.log('\n🎉 Toutes les icônes PNG ont été générées!');
}

generateIcons();