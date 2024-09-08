var evt = require('events');
var emt = new evt.EventEmitter();

emt.on('start', function() {
    console.log('first');
});

emt.addListener('start', function() {
    console.log('second');
});

emt.once('start1', function() {
    console.log('oneTime');
});

emt.emit('start');
emt.emit('start1');
emt.emit('start1');


emt.on('newListener', function(event, listener) {
    console.log(`Added: ${event}`);
});

emt.on('new', function() {
    console.log('New');
});

emt.emit('new');