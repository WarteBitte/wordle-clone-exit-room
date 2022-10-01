let anzahlWoerter = 0;
let richtigesWort = "hallo";
let wortErraten = false;

function wortEingegeben() {
    if (anzahlWoerter < 6 && !wortErraten) {
        let eingegebenesWort = document.getElementById("eingabefeld").value;
        anzahlWoerter += 1;

        for (let i = 1; i < 6; i++) {
            document.getElementById(`w${anzahlWoerter}${i}`).innerHTML = eingegebenesWort.charAt(i - 1);

        }

        eingabefeld.value = "";
        console.log("Anzahl Wörter: " + anzahlWoerter);

        if (eingegebenesWort == richtigesWort) {
            wortErraten = true;

            console.log("Wort erraten!")

            document.getElementById("eingabefeld").readOnly = true;
            document.getElementById("eingabefeld").value = eingegebenesWort;
        }
    }
}
