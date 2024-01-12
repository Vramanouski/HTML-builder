const fsPromises = require('fs/promises');
const path = require('path');

const startPath = path.join(__dirname, 'files');
const newPath = path.join(__dirname, 'files-copy');

async function copyFiles() {
  try {
    const files = await fsPromises.readdir(startPath);

    for (const file of files) {
      const sourceFile = path.join(startPath, file);
      const destFile = path.join(newPath, file);

      await fsPromises.copyFile(sourceFile, destFile);
    }
  } catch (error) {
    console.error('Error during file copy:', error);
  }
}

async function createAndCopy() {
  try {
    await fsPromises.access(newPath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fsPromises.mkdir(newPath);
    } else {
      console.error('Error:', error);
      return;
    }
  }

  await copyFiles();
}

createAndCopy();
