import inquirer from "inquirer";
let mypincode = 1974;
let mybalance = 20000;
let pincode = await inquirer.prompt([{
        name: "pinnumber",
        type: "number",
        message: "Enter your pincode",
    }]);
if (pincode.pinnumber === mypincode) {
    console.log("correct pin code");
    let operations = await inquirer.prompt([{
            name: "selectoption",
            type: "list",
            message: "please select option",
            choices: ["check balance", "withdraw"],
        }]);
    if (operations.selectoption === "withdraw") {
        let amountas = await inquirer.prompt([{
                message: "please enter amount",
                type: "number",
                name: "amount",
            }]);
        mybalance -= amountas.amount;
        console.log("your balance is", mybalance);
    }
    else if (operations.selectoption === "check balance") {
        console.log("your balance is", mybalance);
    }
}
else {
    console.log("incorrect pin code");
}
