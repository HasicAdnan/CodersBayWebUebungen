

//  Date Klasse: Lasse das aktuelle Datum und Uhrzeit schön formatiert ausgeben
let timeCurrent = new Date();
let date = "Datum: " + timeCurrent.getDate() + "."+ (timeCurrent.getMonth() + 1) + "." + timeCurrent.getFullYear() + "\nUhr: " + timeCurrent.getHours() + ":" + timeCurrent.getMinutes() + ":" + secondsFormat(timeCurrent.getSeconds());

console.log(date);

function secondsFormat(sec) {
    let secFormating = sec;
    if (sec < 10) {
        sec = "0" + sec;
        return sec;
    } else {
        secFormating = sec;
        return secFormating;
    }
}
//################################################################################


//