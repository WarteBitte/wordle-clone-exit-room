let anzahlWoerter = 0; // anzahl der eingegebenen Woerter bzw. der Versuche
let wortErraten = false;
// zufaelliges wort auswaehlen:
const richtigesWort = zielWoerter[Math.floor(Math.random() * zielWoerter.length)];

console.clear()
console.log(`Richtiges Wort: ${richtigesWort.toUpperCase()}`);

function gewonnen() {
    wortErraten = true;
    document.getElementById("input").readOnly = true;
    document.getElementById("input").value = richtigesWort;

    console.log("Wort erraten!")
}

function verloren() {
    document.getElementById("input").readOnly = true;
    document.getElementById("richtigesWort").innerHTML = richtigesWort;

    console.log("Wort nicht in 6 Versuchen erraten!")
}

function faerben(eingegebenesWort) {
    for (let i = 0; i < 5; i++) { // 5 mal wiederholen wegen 5 buchstaben in jeder zeile
        const kaestchen = document.getElementById(`w${anzahlWoerter}${i + 1}`);
        const taste = document.getElementById(eingegebenesWort.charAt(i))

        kaestchen.innerHTML = eingegebenesWort.charAt(i);

        kaestchen.style.borderStyle = "none";

        if (eingegebenesWort.charAt(i) == richtigesWort.charAt(i)) {
            // richtiger buchstabe = gruen
            kaestchen.style.backgroundColor = "forestgreen";

            taste.style.backgroundColor = "forestgreen";
            taste.style.color = "#ffffff";

        } else if (richtigesWort.indexOf(eingegebenesWort.charAt(i)) != -1) {
            // richtiger buchstabe aber an falscher stelle = gelb
            kaestchen.style.backgroundColor = "goldenrod";

            if (taste.style.backgroundColor != "forestgreen") {
                taste.style.backgroundColor = "goldenrod";
                taste.style.color = "#ffffff";
            }

        } else {
            // falscher buchstabe = grau
            kaestchen.style.backgroundColor = "#787c7e";

            taste.style.backgroundColor = "#787c7e";
            taste.style.color = "#ffffff";

        }
    }
}

function wortEingegeben() {
    if (anzahlWoerter < 6 && !wortErraten) { // testen, ob noch nicht verloren und gewonnen wurde
        let eingegebenesWort = document.getElementById("input").value.toLowerCase();

        console.log(eingegebenesWort)

        if (alleWoerter.includes(eingegebenesWort)) { // falls das wort in der liste aller woerter existiert
            anzahlWoerter += 1;

            console.log("Valides Wort eingegeben.")

            // faerbt die kaestchen der jeweiligen zeile mit der richtigen hintergrundfarbe:
            faerben(eingegebenesWort);

            console.log("Anzahl Wörter: " + anzahlWoerter);

            // spielende verwalten:
            if (eingegebenesWort == richtigesWort) {
                gewonnen();
            } else if (anzahlWoerter > 5) {
                verloren();
            }

        } else {
            alert("Wort ist nicht in Wortliste.")
            console.log("Invalides Wort eingegeben.")
        }

        input.value = "";

    }
}