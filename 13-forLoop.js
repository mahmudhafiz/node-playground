console.log("Start task");

console.time();
let a = 3;
for (let i = 0; i < 10000000000; ++i) {
    a += i;
}

console.timeEnd();
console.log('End task');