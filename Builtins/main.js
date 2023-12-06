

//1. Date Klasse: Lasse das aktuelle Datum und Uhrzeit schön formatiert ausgeben
let timeCurrent = new Date();
let date = "Datum: " + timeCurrent.getDate() + "."+ (timeCurrent.getMonth() + 1) + "." + timeCurrent.getFullYear() + "\nUhr: " + timeCurrent.getHours() + ":" + timeCurrent.getMinutes() + ":" + secondsFormat(timeCurrent.getSeconds());

console.log(date);

function secondsFormat(sec) {
    let secFormating = sec;
    if (sec < 10) {
        sec = "0" + sec;
        return sec;
    } else {
        secFormating = sec;
        return secFormating;
    }
}
//################################################################################


/*2. Math Klasse: Schreibe eine Funktion, die Zufallszahlen zwischen zwei Werten (die der Funktion
übergeben werden) zurückgibt. Erweitere die Funktion um einen dritten Boolean-Parameter, der angibt,
ob die Funktion nur ganze Zahlen oder auch Kommazahlen zurückgeben darf, rundet sie
gegebenenfalls auf ganze Zahlen.*/

let nummerAnfang = 10;
let nummerEnde = 20;
let range = nummerEnde - nummerAnfang +1;
let randomNummer;

randomNummer = ((Math.random() * range) + nummerAnfang);
randomNummer = roundNummer();
console.log(randomNummer);




// check if a number is integer oder double
function checkNummer(nummer) {
    if(nummer %  1 != 0) {
        //console.log("Double");
        return false;
} else if(nummer % 1 == 0) {
   // console.log("Integer");
    return true;
}
}

// round a number
function roundNummer() {
    if (!checkNummer(randomNummer)) {
        randomNummer = Math.floor(randomNummer);
        return randomNummer;
} else
 {
    return randomNummer;
 }
}

//################################################################################


//3. Array Klasse: Erstelle ein Array von Zahlen (nicht sortiert!), lass es sortieren.

let arr = [];

for (let i = 0; i < 10; i++) {
    randomNummer = ((Math.random() * range) + nummerAnfang);
    randomNummer = roundNummer();
    arr.push(randomNummer);
}
arr.sort();

console.log(arr);

//################################################################################


//Object Klasse: Lasst alle Keys eines Objekts ausgeben - ohne eine for-in Schleife zu nutzen
let auto = {
    name: "Volvo",
    model: "S40",
    year: 2016,
    color: "Black",
    price: 1000000,
    fuel: "Diesel"
};

console.log(Object.keys(auto));

//################################################################################

//5. JSON Klasse: Erstelle ein Objekt und lass dieses als JSON formatiert ausgeben.

let notebook = {
    name: "Lenovo",
    model: "IdeaPad",
    year: 2016,
    color: "Black",
    price: 1000,
    ram: "16gb",
    typeOfRam: "ddr4",
    cpu: "Intel Core i7-7500U"
};

console.log(JSON.stringify(notebook, null, 2));
//################################################################################

/*6. Number Klasse: Lass den Nutzer eine Ganze Zahl als Binärzahl (als String, nur 0 und 1) eingeben,
wandle sie in eine Dezimalzahl um.*/


let userInput = prompt("Bitte geben Sie eine Zahl nur 0 und 1");
userInput = userInput.split(".");

function checkNumberFirstUserInputArray(userInput) {
let sumOfArray0 = 0;  
for(let i = 0; i < userInput[0].length; i++) {
    let numm = parseInt(userInput[0][i]);
    let exponent = parseInt(userInput[0].length-1-i);
    sumOfArray0 += numm * (Math.pow(2, exponent));
} 
return sumOfArray0;
}

function checkNumberSecondUserInputArray(userInput) {
    let sumOfArray1 = 0;  
    for(let i = 0; i < userInput[1].length; i++) {
        let numm = parseInt(userInput[1][i]);
        let exponent = parseInt(-1-i);
        sumOfArray1+= numm * (Math.pow(2, exponent));
    } 
    return sumOfArray1;
    }

let decimalNumber = checkNumberFirstUserInputArray(userInput) + checkNumberSecondUserInputArray(userInput);
console.log("Your binary number to decimal is: " + decimalNumber);









