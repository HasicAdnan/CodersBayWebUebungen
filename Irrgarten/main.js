let arrayAbstand = [5, [1, 2], [2, 3, 4], [1, 3, 4], [0, 1, 4], [1, 2, 3, 4, 5], 5];
let array = [];
let i = 2;
let j = 3;

irrgartenFeld();
leerZeichenFeld();
array[i][j] = "X";
array[4][0] = 0;
printLabirint();

game();
alert("You are winner!");

function irrgartenFeld() {
  for (let i = 0; i < 7; i++) {
    array[i] = new Array(7).fill("#");
  }
}

function leerZeichenFeld() {
  for (let i = 0; i < arrayAbstand.length; i++) {
    for (let j = 0; j < arrayAbstand[i].length; j++) {
      array[i][arrayAbstand[i][j]] = ' ';
    }
  }
}

function printLabirint() {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join(" "));
    }
}

function game() {
  do {
    let los = prompt("w ⬆  x ⬇  ⬅ a  d 🠮");
    if (checkEingabe(los)) {
      array[i][j] = " ";
      switch (los) {
        case "w":
          if (i > 0 && array[i - 1][j] !== "#") {
            --i;
          }
          break;
        case "a":
          if (j > 0 && array[i][j - 1] !== "#") {
            --j;
          }
          break;
        case "x":
          if (i < array.length - 1 && array[i + 1][j] !== "#") {
            ++i;
          }
          break;
        case "d":
          if (j < array[i].length - 1 && array[i][j + 1] !== "#") {
            ++j;
          }
          break;
      }

      array[i][j] = "X";
      printLabirint();

    } else {
      alert("Please enter a valid input!");
    }

  } while (array[i][j] !== array[4][0]);

}

function checkEingabe(q) {
  return q === "w" || q === "a" || q === "x" || q === "d";
}
