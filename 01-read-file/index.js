const fs = require('fs');
const path = require('path');
const pathAddress = path.join(__dirname, 'text.txt');
const readableStream = fs.createReadStream(pathAddress);

readableStream.on('data', (chunk) => console.log(chunk.toString()));
