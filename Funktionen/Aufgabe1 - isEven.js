let nummer = prompt("Bitte geben Sie Ihre Nummer ein:");

function isEven(x) {
  if (!isNaN(x)) {
    if (x % 2 === 0) {
      return true;
    } else if (x % 2 !== 0) {
      return false;
    }
  } else {
    return undefined;
  }
}

let trueOderFalse = isEven(nummer);

if (trueOderFalse === undefined) {
  alert("Error! Bitte geben Sie Ihre Nummer ein!");
  isEven(nummer);
} else {
  if (trueOderFalse) {
    console.log(nummer + " ist gerade Zahl");
  } else {
    console.log(nummer + " ist ungerade Zahl");
  }
}