

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


