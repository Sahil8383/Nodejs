const fs = require('fs');

function countWords(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    const words = data.split(/\s+/).filter(word => word !== '');
    const wordCount = words.length;

    console.log('Total word count:', wordCount);
  });
}

const filename = 'data.txt';
countWords(filename);
