const fs = require('fs');
const path = require('path');

const pathText = path.join(__dirname, 'secret-folder');

fs.readdir(pathText, { withFileTypes: true }, (error, files) => {
  if (error) {
    console.error('Error. Please try later.', error);
    return;
  }

  files.forEach((file) => {
    if (file.isFile()) {
      const fullPath = path.join(pathText, file.name);
      fs.stat(fullPath, (err, stats) => {
        const name = path.basename(file.name, path.extname(file.name));
        const extension = path.extname(file.name).slice(1);

        console.log(`${name}-${extension}-${(stats.size / 1024).toFixed(2)}kb`);
      });
    }
  });
});
