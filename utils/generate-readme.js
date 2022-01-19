const fs = require('fs');
const dir = './dist/';

const writeFile = fileContent => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'readMe file created!'
        });
      });
    });
  };

    module.exports = {
        writeFile: writeFile,
      };