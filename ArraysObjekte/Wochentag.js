let wocheArray = ["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"];
let number = prompt("Bitte geben Sie Ihre Nummer ein:");

function wochenTag(x, array) {
    for(let i = 0; i < array.length; i++) {
        if(i ==  (x-1)) {
            return array[i];
        }
    }
}

let tag = wochenTag(number, wocheArray);
console.log(tag);
