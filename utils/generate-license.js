const fs = require('fs');
const dir = './dist/';

const writeLicense = licenseContent => {
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/LICENSE', licenseContent, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'LICENSE file created!'
        });
      });
    });
  };

    module.exports = {
        writeLicense: writeLicense,
      };