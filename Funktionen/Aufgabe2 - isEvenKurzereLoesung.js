let nummer = prompt("Bitte geben Sie Ihre Nummer ein:");
let isEven = (x) => {
    let isEven = x % 2 == 0 ? true : false;
    return isEven;
 };
isEven === true ? console.log(nummer + " ist gerade Zahl") : console.log(nummer + " ist ungerade Zahl");