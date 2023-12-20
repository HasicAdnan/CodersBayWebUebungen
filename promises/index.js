import chalk from 'chalk';
import moment from 'moment';
import fs from 'fs';
import readline from 'readline';
import { log } from 'console';


const currentTime = moment().format('DD-MM-YYYY HH:mm:ss:ms');




fs.promises.readFile('data.json', 'utf-8')
  .then((data) => {
    console.log('File content:', data);
  }) 
  .catch((error) => {
    console.error('Error reading file:', error);
  });


async function readFileAsync() {
  try {
    const data = await fs.promises.readFile('data.json', 'utf-8');
    console.log('File content:', data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

readFileAsync();


let prom = new Promise (function (resolve, reject) {
    setTimeout(function() {
        resolve("#");
    }, 2000)

})

function printHash(anfang, ende) {
  let current = anfang;
  setTimeout(function go() {
    let strArray = ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"];
    process.stdout.write(chalk.bgGreen(strArray[current]));
    if (current < ende) {
      setTimeout(go, 1000);
    } else {
      process.stdout.write('\n'); 
    }
    current++;
  }, 1000);
}


prom.then(function(prom){
 printHash(0,9);
}, function(err){
    console.log(err);
});



