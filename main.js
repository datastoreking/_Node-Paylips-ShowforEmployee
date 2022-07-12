console.log("first-name, last-name, annual-salary, super-rate (%), payment-start-date");

var readline = require('readline');

var input = [];

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.prompt();

rl.on('line', function (cmd) {

    input.push(cmd);
});

rl.on('close', function (cmd) {

    // console.log(input.join('\n'));
    console.log(input)
    process.exit(0);
});