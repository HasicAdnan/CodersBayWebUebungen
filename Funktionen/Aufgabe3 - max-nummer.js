let nummer = () => { 
    let nummerArray = []
    for (let i = 0; i < 4; i++) {
        let x = prompt("Bitte geben Sie Ihre Nummer ein:");
        nummerArray[i] = x;
        }
        let maxNummer = Math.max(...nummerArray);
        return maxNummer;
}
console.log(`Max nummer ist ${nummer()}`);