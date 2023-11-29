var buchstabe = prompt("Bitte geben Sie Ihre Buchstabe ein:");



if(buchstabe.toUpperCase() == "A" || 
buchstabe.toUpperCase() == "E" || 
buchstabe.toUpperCase() == "I" ||
buchstabe.toUpperCase() == "O" ||
buchstabe.toUpperCase() == "U") {

    console.log("Buchstabe ist ein Vokal");
    
 } else {
        console.log("Buchstabe ist Konsonant");
    }