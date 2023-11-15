let log = () => {
    let text = prompt("Bitte geben Sie Ihre Text ein:");
    if(text.length > 25) {
        alert("Text ist zu lang. Maximum ist 25 Zeichen!");
    } else {
        return text;
    }   
}
console.log(log());