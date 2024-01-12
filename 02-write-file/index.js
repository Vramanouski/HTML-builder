const fs = require('fs');
const path = require('path');
const { stdout, stdin } = process;

const output = fs.createWriteStream('text.txt');
const pathText = path.join(__dirname, 'text.txt');

stdout.write('Hello! What would you like to write today? \n');

process.stdin.on('data', function (data) {
  const hanldedData = data.toString().trim();

  if (hanldedData == 'exit') {
    process.exit(0);
  } else {
    fs.appendFile(pathText, hanldedData + '\n', (err) => {
      if (err) {
        console.error('Error', err);
        return;
      }
    });
  }
});

process.on('exit', () => console.log('Bye-bye! Have a nice day! \n'));
