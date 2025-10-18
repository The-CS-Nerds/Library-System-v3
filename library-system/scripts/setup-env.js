#!/usr/bin/env node

import { copyFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const envPath = join(rootDir, '.env');
const envExamplePath = join(rootDir, '.env.example');

if (!existsSync(envPath)) {
	console.log('📝 .env file not found, copying from .env.example...');
	try {
		copyFileSync(envExamplePath, envPath);
		console.log('✅ .env file created successfully!');
		console.log('💡 You can now edit .env to customize your database settings.');
	} catch (error) {
		console.error('❌ Failed to copy .env.example to .env:', error.message);
		process.exit(1);
	}
} else {
	console.log('✅ .env file already exists.');
}
