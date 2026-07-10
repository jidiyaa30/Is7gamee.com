import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { mkdirSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const logoPath = join(publicDir, "logo.webp");

async function generate() {
  console.log("Generating SEO image assets from logo.webp...\n");

  // 1. Favicon 16x16
  await sharp(logoPath)
    .resize(16, 16, { fit: "cover" })
    .png()
    .toFile(join(publicDir, "favicon-16x16.png"));
  console.log("  favicon-16x16.png");

  // 2. Favicon 32x32
  await sharp(logoPath)
    .resize(32, 32, { fit: "cover" })
    .png()
    .toFile(join(publicDir, "favicon-32x32.png"));
  console.log("  favicon-32x32.png");

  // 3. Favicon ICO (32x32 png as ico)
  await sharp(logoPath)
    .resize(32, 32, { fit: "cover" })
    .png()
    .toFile(join(publicDir, "favicon.ico"));
  console.log("  favicon.ico");

  // 4. Apple Touch Icon 180x180
  await sharp(logoPath)
    .resize(180, 180, { fit: "cover" })
    .png()
    .toFile(join(publicDir, "apple-touch-icon.png"));
  console.log("  apple-touch-icon.png");

  // 5. Android Chrome 192x192
  await sharp(logoPath)
    .resize(192, 192, { fit: "cover" })
    .png()
    .toFile(join(publicDir, "android-chrome-192x192.png"));
  console.log("  android-chrome-192x192.png");

  // 6. Android Chrome 512x512
  await sharp(logoPath)
    .resize(512, 512, { fit: "cover" })
    .png()
    .toFile(join(publicDir, "android-chrome-512x512.png"));
  console.log("  android-chrome-512x512.png");

  // 7. OG Image (1200x630) - Logo centered on branded red background
  const ogWidth = 1200;
  const ogHeight = 630;
  const logoSize = 280;

  const logoBuffer = await sharp(logoPath)
    .resize(logoSize, logoSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Create branded OG image: red gradient background with logo + text
  const svgOverlay = `
    <svg width="${ogWidth}" height="${ogHeight}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#dc2626;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#ef4444;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#fca5a5;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${ogWidth}" height="${ogHeight}" fill="url(#bg)" rx="0"/>
      <text x="${ogWidth / 2}" y="${ogHeight - 160}" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle">IW7 Game</text>
      <text x="${ogWidth / 2}" y="${ogHeight - 90}" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="rgba(255,255,255,0.85)" text-anchor="middle">Download APK • Register • Login • Play</text>
    </svg>
  `;

  await sharp(Buffer.from(svgOverlay))
    .resize(ogWidth, ogHeight)
    .composite([
      {
        input: logoBuffer,
        top: 60,
        left: Math.round((ogWidth - logoSize) / 2),
      },
    ])
    .png()
    .toFile(join(publicDir, "og-image.png"));
  console.log("  og-image.png (1200x630)");

  // 8. App icon (like raj-luck-game.webp equivalent)
  await sharp(logoPath)
    .resize(512, 512, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(join(publicDir, "iw7-game.webp"));
  console.log("  iw7-game.webp (512x512)");

  console.log("\nAll SEO image assets generated successfully!");
}

generate().catch(console.error);
