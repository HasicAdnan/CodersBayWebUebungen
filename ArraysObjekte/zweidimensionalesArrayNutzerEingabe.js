let numberOfRows = prompt("Bitte geben Sie Ihre Anzahl der Zeilen ein:");
let numberOfColumns = prompt("Bitte geben Sie Ihre Anzahl der Spalten ein:");

let array2D = new Array(Number(numberOfRows));
for (let i = 0; i < Number(numberOfRows); i++) {
    array2D[i] = new Array(Number(numberOfColumns));
}

for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
        if(i == 0) {
            array2D[i][j] = prompt("Bitte geben Sie Name der Spalte " + (Number(j)+1) + " ein:")
            array2D[i][j] = array2D[i][j].toUpperCase();
        } else {
            array2D[i][j] = prompt("Bitte geben Sie Ihr " +  array2D[0][j] + " ein:");
        }
    }
}

for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
        let element = array2D[i][j];
        console.log(array2D[i].join("  "));
    }
}
