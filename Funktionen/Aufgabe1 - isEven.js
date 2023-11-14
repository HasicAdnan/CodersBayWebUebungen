let nummer = prompt("Bitte geben Sie Ihre Nummer ein:");

function fn(x) {
  if (x % 2 === 0) {
    console.log(x + " ist gerade Zahl");
    return true;
  } else {
    console.log(x + " ist ungerade Zahl");
    return false;
  }
}

let trueOderFalse = fn(nummer);
