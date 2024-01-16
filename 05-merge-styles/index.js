const fsPromises = require('fs/promises');
const path = require('path');

const stylesPath = path.join(__dirname, 'styles');
const bundlePath = path.join(__dirname, 'project-dist', 'bundle.css');

let data = [];

async function readFiles(stylesPath) {
  try {
    const files = await fsPromises.readdir(stylesPath);

    for (const file of files) {
      if (path.extname(file) === '.css') {
        const filePath = path.join(stylesPath, file);
        const content = await fsPromises.readFile(filePath, 'utf8');
        data.push(content);
      }
    }
  } catch (e) {
    console.error('Error:', e);
  }

  fsPromises
    .writeFile(bundlePath, data, 'utf8')
    .then(() => {
      console.log('You styles have been merged. Enjoy!');
    })
    .catch((e) => {
      console.error('Error:', err);
    });
}

readFiles(stylesPath);
