let zweiDimensionalesArray =  [
    ["Vorname", "Nachname", "Alter"],
    ["Hans", "Müller", 22],
    ["Georg", "Huber", 37],
    ["Fritz", "Mayer", 19]
]

for(let i = 0; i < zweiDimensionalesArray.length; i++) {
    for(let j = 0; j < zweiDimensionalesArray[i].length; j++) {
        let element = zweiDimensionalesArray[i].join(" ");
        console.log(element);
    }
}

