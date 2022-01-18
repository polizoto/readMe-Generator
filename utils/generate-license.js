const fs = require('fs');

const writeLicense = licenseContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./LICENSE', licenseContent, err => {
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