var tag = prompt("Bitte geben Sie Ihren Tag ein 1 - 7:");

switch(tag) {
    case "1":
        console.log("Der Tag ist Montag");
        break;
    case "2":
        console.log("Der Tag ist Dienstag");
        break;
    case "3":
        console.log("Der Tag ist Mittwoch");
        break;
    case "4":
        console.log("Der Tag ist Donnerstag");
        break;
    case "5":
    console.log("Der Tag ist Freitag");
        break;
    case "6":
        console.log("Der Tag ist Samstag");
        break;
    case "7":
        console.log("Der Tag ist Sonntag");
        break;
    default:
        console.log("DerTag ist ungültig");
        break;
}