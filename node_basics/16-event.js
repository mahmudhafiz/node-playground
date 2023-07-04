const EventEmitter = require('events');

const customEmitter = new EventEmitter();

const adder = (a ,b) => {
    return a + b;
}

customEmitter.on('search', () => {
    let got = adder(3, 10);
    console.log(`date received ${got} times!`);
})

customEmitter.emit('search');