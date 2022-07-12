console.log("\n");
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

    console.log("\n");
    console.log("name, pay-period, gross-income, income-tax, net-income, super-amount")

    for(let i = 0; i < input.length; i ++) {
        var eachEmployee = input[i];
        var EmployeeStructure = eachEmployee.split(",");
        var name = EmployeeStructure[0] + " " + EmployeeStructure[1];
        var payperiod = EmployeeStructure[EmployeeStructure.length - 1];
        var grossincome = Math.round(EmployeeStructure[2]/12);
        var incometax = 0;
        switch (true) {
            case EmployeeStructure[2] > 180000:
                incometax = Math.round((54232 + (EmployeeStructure[2] - 180000) * 0.45)/12);
                break; 
            case EmployeeStructure[2] > 87000:
                incometax = Math.round((19822 + (EmployeeStructure[2] - 87000) * 0.37)/12);
                break;
            case EmployeeStructure[2] > 37000:
                incometax = Math.round((3572 + (EmployeeStructure[2] - 37000) * 0.325)/12);
                break;
            case EmployeeStructure[2] > 18200:
                incometax = Math.round(((EmployeeStructure[2] - 18200) * 0.19)/12);
                break;
            default:
                break;
        }
        var netincome = Math.round(grossincome - incometax); 
        var superamount = Math.round(grossincome * (EmployeeStructure[3].split("%")[0]) / 100); 
        console.log(name, ",", payperiod, ",", grossincome, ",", incometax, ",", netincome, ",", superamount);
    }

    process.exit(0);
});

