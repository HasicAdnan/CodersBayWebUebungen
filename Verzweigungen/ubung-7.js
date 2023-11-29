
var nummerArray = [];
for (let i = 0; i < 4; i++) {
var nummer = prompt("Bitte geben Sie Ihre Nummer ein:");
nummerArray[nummerArray.length] = nummer;
}
var maxNummer = Math.max(...nummerArray);

console.log("Die groesste: Zahl ist" + maxNummer);