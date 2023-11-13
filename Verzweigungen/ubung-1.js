//Aufgabe 1:

const USER = "admin";
const PASSWORT = "0000";

var userEingabe = prompt("Bitte geben Sie Ihr Benutzername ein:");

"use strict";
if(userEingabe === USER) {
    let userPaswort = prompt("Bitte geben Sie Ihr Passwort ein:");
    if(userPaswort === PASSWORT) {
        alert("Sie sind sich erfolgreich eingeloggt!");
    } else {
        alert("Das Passwort ist falsch!");
    }
} else {
    userEingabe = alert("Benutzername existiert nicht! Bitte die Eingabe wiederholen.");
}