import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../static/images');
const QUALITY = 85; // WebP quality (0-100)

async function findImages(dir: string): Promise<string[]> {
	const files: string[] = [];
	const entries = await fs.readdir(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			const nestedFiles = await findImages(fullPath);
			files.push(...nestedFiles);
		} else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
			files.push(fullPath);
		}
	}

	return files;
}

async function convertToWebP(imagePath: string): Promise<void> {
	const ext = path.extname(imagePath);
	const webpPath = imagePath.replace(new RegExp(`${ext}$`, 'i'), '.webp');

	// Skip if WebP already exists
	try {
		await fs.access(webpPath);
		console.log(`  ⏭  Skipping ${path.basename(imagePath)} (WebP already exists)`);
		return;
	} catch {
		// WebP doesn't exist, continue
	}

	try {
		const info = await sharp(imagePath)
			.webp({ quality: QUALITY })
			.toFile(webpPath);

		const originalSize = (await fs.stat(imagePath)).size;
		const savings = ((1 - info.size / originalSize) * 100).toFixed(1);

		console.log(
			`  ✓ ${path.basename(imagePath)} → ${path.basename(webpPath)} (${savings}% smaller)`
		);
	} catch (error) {
		console.error(`  ✗ Failed to convert ${path.basename(imagePath)}:`, error);
	}
}

async function optimizeAllImages() {
	console.log('🖼️  Image Optimization Started\n');
	console.log(`Scanning: ${IMAGES_DIR}\n`);

	try {
		const images = await findImages(IMAGES_DIR);

		if (images.length === 0) {
			console.log('No images found to optimize.');
			return;
		}

		console.log(`Found ${images.length} images to process:\n`);

		for (const imagePath of images) {
			await convertToWebP(imagePath);
		}

		console.log('\n✅ Image optimization completed!');
		console.log('\n💡 Tip: Update your image references to use .webp extensions');
		console.log('   Example: <img src="/images/photo.webp" alt="..." />');
	} catch (error) {
		console.error('\n❌ Error during optimization:', error);
		process.exit(1);
	}
}

optimizeAllImages();
