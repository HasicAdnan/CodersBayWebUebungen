import chalk from 'chalk';
import moment from 'moment';
import fs from 'fs';
import readline from 'readline';

const currentTime = moment().format('DD-MM-YYYY HH:mm:ss');


console.log(chalk.bgYellow.bold(currentTime));


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

rl.on('close', () => process.exit(0));

const dataFilePath = './data.json';

let data = [];
try {
  const dataFile = fs.readFileSync(dataFilePath, 'utf8');
  data = JSON.parse(dataFile);
} catch (err) {
  console.log(chalk.red('Error', chalk.underline.bgRed(err) + '!'));
}

async function addProduct() {
  const number = await prompt(chalk.bgGreenBright.bold('Geben Sie Produktnummer ein: '));
  const name = await prompt(chalk.bgGreen.bold('Geben Sie Produktname ein: '));
  const price = await prompt(chalk.bgGreenBright.bold('Geben Sie den Preis des Produkts ein: '));
  

  const newProduct = { number, name, price };
  data.push(newProduct);
  console.log('Das Produkt wurde eingegeben:', newProduct);
  askUser();
}

function saveDataAndExit() {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFile(dataFilePath, jsonData, 'utf8', (err) => {
    if (err) {
     alert(err);
    } else {
      console.log('Daten wurden erfolgreich gespeichert.');
    }
    rl.close();
  });
}



async function findProduct() {
  const searchNumber = await prompt('Wollen Sie das Produkt durchsuchen, geben Sie die Produktnummer ein: ');
  const foundProduct = data.find(product => product.number === searchNumber);
  if (foundProduct) {
    console.log('Produkt gefunden:', foundProduct);
  } else {
    console.log('Produkt nicht gefunden.');
  }
  askUser();
}

async function askUser() {
  const answer = await prompt('Daten hinzufügen möchte (Durch Eingabe von a), Daten finden (Eingabe f) oder speichern und beenden (Eingabe x) ? ');

  switch (answer) {
    case 'a':
      await addProduct();
      break;
    case 'f':
      await findProduct();
      break;
    case 'x':
      saveDataAndExit();
      break;
    default:
      console.log('Das war falsch, können Sie bitte einen gültigen Eingabe hinzufügen.');
      await askUser();
  }
}

askUser();
