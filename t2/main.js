var FileHandler = require('./sc');
var fileHandler = new FileHandler();

fileHandler.readDataFromFile('file.js', function(response) {
    console.log('Read:', response);

    fileHandler.writeDataToFile('output.txt', 'Text to write', function(writeResponse) {
        console.log('Write:', writeResponse);
    });
});