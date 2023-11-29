var nummer = prompt("Bitte geben Sie Ihre Nummer ein:");

if (nummer % 2 === 0) { 
    console.log(nummer + " ist gerade Zahl")
} else { 
    console.log(nummer + " ist ungerade Zahl")
}

if (nummer % 1 !== 0) { 
    console.log(nummer + " ist Kommazahl")
} else { 
    console.log(nummer + " ist ganze Zahl")
}