let anzahlWoerter = 0;
let richtigesWort = "hallo";
let wortErraten = false;

function wortEingegeben() {
    if (anzahlWoerter < 6 && !wortErraten) {
        let eingegebenesWort = document.getElementById("eingabefeld").value;
        anzahlWoerter += 1;

        for (let i = 1; i < 6; i++) {
            document.getElementById(`w${anzahlWoerter}${i}`).innerHTML = eingegebenesWort.charAt(i - 1);
            if (eingegebenesWort.charAt(i - 1).toLowerCase() == richtigesWort.charAt(i - 1)) {
                document.getElementById(`w${anzahlWoerter}${i}`).style.backgroundColor = "#6aaa64";

            } else if (richtigesWort.indexOf(eingegebenesWort.charAt(i - 1).toLowerCase()) != -1) {
                document.getElementById(`w${anzahlWoerter}${i}`).style.backgroundColor = "#c9b458";
            }
        }

        eingabefeld.value = "";
        console.log("Anzahl Wörter: " + anzahlWoerter);

        if (eingegebenesWort.toLowerCase() == richtigesWort) {
            wortErraten = true;

            console.log("Wort erraten!")

            document.getElementById("eingabefeld").readOnly = true;
            document.getElementById("eingabefeld").value = richtigesWort;
        }
    } else if (anzahlWoerter > 5) {
        document.getElementById("eingabefeld").readOnly = true;
    }
}
