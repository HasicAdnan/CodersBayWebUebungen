import chalk from 'chalk';
import moment from 'moment';
import readline from 'readline';
import readFile from 'fs/promises';


const fs = require('fs/promises');

async function main() {
    await fs.writeFile('test.txt', 'hello');
  }

readFile('./package.json', 'utf8')
.then((data) => {
console.log('File read', data);
})
.catch((err) => {
console.error('Error reading file', err);
})
.finally(() => {
console.log('After read or error');
});
console.log('Before file was loaded');

async function addProduct() {
    const number = await prompt(chalk.bgGreenBright.bold('Geben Sie Produktnummer ein: '));
    const name = await prompt(chalk.bgGreen.bold('Geben Sie Produktname ein: '));
    const price = await prompt(chalk.bgGreenBright.bold('Geben Sie den Preis des Produkts ein: '));
    
  
    const newProduct = { number, name, price };
    data.push(newProduct);
    console.log('Das Produkt wurde eingegeben:', newProduct);
    askUser();
  }
  