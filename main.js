import inquirer from "inquirer";
let myBalance = 1000000; //doller
let myPin = 2233;
let pinAnswer = await inquirer.prompt([{
        type: "number",
        name: "pin",
        message: "enter your pin code"
    },
]);
if (pinAnswer.pin === myPin) {
    let operationAns = await inquirer.prompt([{
            type: "list",
            name: "operation",
            message: "choose an option",
            choices: ["deposit", "withdraw", "chek balance", "exit"]
        }]);
    if (operationAns.operation === "withdraw") {
        let withdrawAns = await inquirer.prompt([{
                type: "number",
                name: "withdraw",
                message: "enter your amount"
            }]);
        if (withdrawAns.withdraw <= myBalance) {
            myBalance -= withdrawAns.withdraw;
            console.log(" your amount has been succesfully widhrawn,your new balance is: " + myBalance);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (operationAns.operation === "chek balance") {
        console.log("your balance is: " + myBalance);
    }
    else if (operationAns.operation === "deposit") {
        let depositAns = await inquirer.prompt([{
                type: "number",
                name: "deposit",
                message: "enter your amount"
            }]);
        myBalance += depositAns.deposit;
        console.log(" your amount has been succesfully deposit,your new balance is: " + myBalance);
    }
    else if (operationAns.operation === "exit") {
        console.log("thank you for using our service");
        process.exit();
    }
    else {
        console.log("Incorrect pin code");
    }
}
