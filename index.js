import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    "USD": 1,
    "PKR": 278,
    "EUR": 0.82,
    "GBP": 0.74,
    "JPY": 129.53,
    "INR": 83.44,
};
let user_choice = await inquirer.prompt([{
        name: "from",
        type: "list",
        choices: ["PKR", "USD", "EUR", "GBP", "JPY", "INR"],
        message: "Select From Currency",
    },
    {
        name: "to",
        type: "list",
        choices: ["PKR", "USD", "EUR", "GBP", "JPY", "INR"],
        message: "Select To Currency"
    }, {
        name: "Amount",
        type: "number",
        message: "Enter the amount you want to convert",
    }]);
let from_currency = currency[user_choice.from];
let to_currency = currency[user_choice.to];
let amount = user_choice.Amount;
let base_amount = amount / from_currency;
let converted_currency = base_amount * to_currency;
console.log("\n\t  From Currency : " + chalk.red(+from_currency));
console.log("\n\t  To Currency : " + chalk.greenBright(+to_currency));
console.log("\n\tConverted Currency : " + chalk.blueBright(+converted_currency));
