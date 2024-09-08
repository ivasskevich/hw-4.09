var evt = require('events');

function FileHandler() {
    this._file = "";
} 
FileHandler.prototype = new evt.EventEmitter();

FileHandler.prototype.readDataFromFile = function(path, callback) {
    this._file = path;
    if (typeof callback === 'function') {
        this.on('readData', callback);
    }
    this._read();
};

FileHandler.prototype._read = function() {
    console.log('Loading data');
    var someDataFromFile = 'Text to read';
    this.emit('readData', someDataFromFile);
    console.log('Read');
};

FileHandler.prototype.writeDataToFile = function(path, data, callback) {
    this._file = path;
    if (typeof callback === 'function') {
        this.on('writeData', callback);
    }
    this._write(data);
};

FileHandler.prototype._write = function(data) {
    console.log('Writing...');
    this.emit('writeData', data);
    console.log('Wrote');
};

module.exports = FileHandler;