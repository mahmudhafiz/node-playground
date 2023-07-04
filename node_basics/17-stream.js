const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000,
    //encoding: 'utf8'
    });

// default 64kb
// last buffer - remainder

stream.on('data', (res) => {
    console.log(res);
});
stream.on('error', (err) => console.log(err))