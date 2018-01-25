var ejs = require('ejs');

function htmlGenerator(templateFile, data) {
  return new Promise(function (resolve, reject) {
    ejs.renderFile(templateFile, data, function (err, html) {
      if (err) {
        reject(err);
      } else {
        resolve(html);
      }
    });
  })
}

module.exports = htmlGenerator;
