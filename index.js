var chalk = require("chalk");

var message = "Hello " + chalk.yellow.bold.bgRed("World");
var message2 = "I AM THE " + chalk.green.bgYellow("LIZARD KING")
console.log(message);
console.log(message2);
