
import fs from 'fs';

async function fetchData() {
    try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        const jsonString = JSON.stringify(data, null, 2);

const filePath = './bitcoinPrice.json';


fs.writeFileSync(filePath, jsonString);

console.log(`Daten werden gespeichert: ${filePath}`);
        
        console.log(response.status, data);
    } catch (error) {
        console.error('Fehler beim Senden der Daten:', error);
    }
}

fetchData();

//###################################################################################

const apiUrl = 'https://reqres.in/api/users/1'; 

//#############################     GET    ########################################### 
fetch(apiUrl)
  .then(response => {
    if (response.ok) {
      console.log('GET request OK!', response.status, response.statusText);
    } else {
      console.error('GET REQUEST ERROR:', response.status, response.statusText);
    }
  })
  .catch(error => console.error('ES GIBT PROBLEM :', error));





// ###########################     POST    ########################################### 
const user = {
    name: 'Andreas',
    job: 'Trainer',
};

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(user)
})
  .then(response => {
    if (response.ok) {
      console.log('POST REQUEST OK!', response.status, response.statusText);
    } else {
      console.error('POST REQUEST ERROR:', response.status, response.statusText);
    }
  })
  .catch(error => console.error('ES GIBT PROBLEM: ', error));

// ############################     PUT     ###########################################
const updatedUser = {
  name: 'Updated Andreas',
  job: 'Fitnessmanager'
};

fetch(apiUrl, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedUser)
})
  .then(response => {
    if (response.ok) {
      console.log('PUT REQUEST OK!');
    } else {
      console.error('ERROR PUT REQUEST:', response.status, response.statusText);
    }
  })
  .catch(error => console.error('ES GINT PROBLEM: ', error));

// ###########################    DELETE    ############################################# 
fetch(apiUrl, {
  method: 'DELETE'
})
  .then(response => {
    if (response.ok) {
      console.log('DELETE REQUEST OK!');
    } else {
      console.error('ERROR DELETE REQUEST:', response.status, response.statusText);
    }
  })
  .catch(error => console.error('ES GIBT PROBLEM: ', error));


