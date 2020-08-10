const chalk = require('chalk');
const name = process.argv[2];
console.log('Hello, ' + chalk.red.bold(name) + '!');