var htmlPdfChrome = require('html-pdf-chrome');

var options = {
  port: 9222,
  printOptions: {
    printBackground: true,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    paperWidth: 14,
    paperHeight: 8
  }
};

function generatePDF(html, outputFile) {
  return htmlPdfChrome.create(html, options)
        .then(function (pdf) {
          pdf.toFile(outputFile);
          return true;
        });
}

module.exports = generatePDF;
