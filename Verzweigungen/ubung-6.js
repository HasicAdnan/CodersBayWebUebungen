var ersteZahl = prompt("Bitte geben Sie Ihre erste Zahl ein:");
var zweiteZahl = prompt("Bitte geben Sie Ihre zweite Zahl ein:");
var rechenOperator = prompt("Bitte geben Sie Ihre Operator ein:");

"use strict"

switch (rechenOperator) {
    
        case "+":
            console.log(ersteZahl + " + " + zweiteZahl + " = " + (Number(ersteZahl) + Number(zweiteZahl)));
            break;
        case "-":
            console.log(ersteZahl + " - " + zweiteZahl + " = " + (ersteZahl - zweiteZahl));
            break;
        case "*":   
            console.log(ersteZahl + " * " + zweiteZahl + " = " + (ersteZahl * zweiteZahl));
            break;
        case "/":
            console.log(ersteZahl + " / " + zweiteZahl + " = " + (ersteZahl / zweiteZahl));
            break;
    default:
        break;
}