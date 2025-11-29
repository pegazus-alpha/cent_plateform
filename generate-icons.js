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
    // Version normale (any)
    const filename = `icon-${size}x${size}.png`;
    const filepath = path.join(iconsDir, filename);
    
    // Version maskable (avec plus de padding)
    const maskableFilename = `icon-${size}x${size}-maskable.png`;
    const maskableFilepath = path.join(iconsDir, maskableFilename);
    
    try {
      // Icône normale - logo prend 90% de l'espace
      await sharp(sourcePng)
        .resize(Math.round(size * 0.9), Math.round(size * 0.9), {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .extend({
          top: Math.round(size * 0.05),
          bottom: Math.round(size * 0.05),
          left: Math.round(size * 0.05),
          right: Math.round(size * 0.05),
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .png()
        .toFile(filepath);
      
      console.log(`✅ Generated: ${filename}`);

      // Icône maskable - logo prend 70% de l'espace (zone de sécurité)
      await sharp(sourcePng)
        .resize(Math.round(size * 0.7), Math.round(size * 0.7), {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .extend({
          top: Math.round(size * 0.15),
          bottom: Math.round(size * 0.15),
          left: Math.round(size * 0.15),
          right: Math.round(size * 0.15),
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .png()
        .toFile(maskableFilepath);
      
      console.log(`✅ Generated: ${maskableFilename}`);
      
    } catch (error) {
      console.error(`❌ Error generating icons for size ${size}:`, error.message);
    }
  }
  
  console.log('\n🎉 Toutes les icônes PNG ont été générées!');
  console.log('💡 Mettez à jour votre manifest.json pour utiliser les icônes maskable');
}

generateIcons();