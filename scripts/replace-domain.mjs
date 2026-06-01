import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

function getAllFiles(dir, ext = null) {
  let results = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (file.startsWith('.') || file === 'node_modules' || file === '.next' || file === '.git') continue;
    
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, ext));
    } else if (!ext || filePath.endsWith(ext)) {
      results.push(filePath);
    }
  }
  return results;
}

function replaceInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    // Replace domain references
    if (content.includes('luigioil.com')) {
      content = content.replace(/luigioil\.com/g, 'www.luigiofficialbrand.com');
      modified = true;
    }

    // Replace email references
    if (content.includes('info@luigioil.com')) {
      content = content.replace(/info@luigioil\.com/g, 'support@luigiofficialbrand.com');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✓ Updated: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// Get all files to process
const allFiles = getAllFiles(projectRoot);
const textFileExtensions = ['.tsx', '.ts', '.jsx', '.js', '.json', '.mjs', '.mts', '.md', '.txt', '.xml'];
const filesToProcess = allFiles.filter(file => 
  textFileExtensions.some(ext => file.endsWith(ext))
);

console.log(`Processing ${filesToProcess.length} files...\n`);

let updateCount = 0;
for (const file of filesToProcess) {
  if (replaceInFile(file)) {
    updateCount++;
  }
}

console.log(`\n✓ Successfully updated ${updateCount} files`);
