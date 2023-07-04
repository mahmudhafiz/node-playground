const { readFile, writeFile, read } = require('fs');

console.log('start')
readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
        return; 
    }
    const first = res;
    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = res;
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${second} && ${first}`,
            (err, res) => {
                if (err) {
                    console.log(err, res);
                    return;
                }
                console.log('done with this task');
            }
        )
    });
});

console.log('starting new task');