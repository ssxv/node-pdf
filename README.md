# node-pdf
create pdf with custom template using node

## dependencies
* ```ejs``` (https://www.npmjs.com/package/ejs) - for generating HTML with custom data
* ```html-pdf-chrome``` (https://www.npmjs.com/package/html-pdf-chrome) - for generating PDF from HTML

## project structure
```
|   .gitignore
|   index.js
|   package.json
|   README.md
|               
+---output
|       ## OUTPUT DIRECTORY ##.txt
|       
+---pdfGenerationModule
|   |   constants.js
|   |   pdfGeneratorService.js
|   |   
|   +---dataGathererModule
|   |       data.js
|   |       dataGathererService.js
|   |       
|   +---pdfGenerator
|   |       pdfGenerator.js
|   |       
|   \---pdfTemplate
|           footer.ejs
|           htmlGenerator.js
|           template.ejs
|           
\---public
    |   index.html
    |
    \---images
            china-flag.png
            china-population.PNG
            china-profile.png
            india-flag.png
            india-population.PNG
            india-profile.png
            usa-flag.png
            usa-population.PNG
            usa-profile.png
```

## get started
* Run ```"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --headless --disable-gpu --enable-logging --remote-debugging-port=9222``` on Windows), keep this process running.

  * This is required by ```html-pdf-chrome``` module to convert HTML to PDF.

* Run ```npm install``` once in project directory.

* Start application by ```node index.js``` from project directory and visit ```http://localhost:3000/```

* Sample Template is in ```./pdfGenerationModule/pdfTemplate/template.ejs``` & Generated PDF will be in ```./output/``` directory.
