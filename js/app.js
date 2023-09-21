// ENIGMA - Ejercicio 1
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";


var writeText = (boxId) => {
    var text = document.getElementById(boxId).value;
    return text.toLowerCase();
};

var transformText = (boxId, alphabetA, alphabetB) => {

    var transformedText = "";

    for (letter of writeText(boxId)) {
        var indexLetter = alphabetA.indexOf(letter);
            if (indexLetter === -1){
                var transformedLetter = letter;
            } else {
                var transformedLetter = alphabetB [indexLetter];
            };

        transformedText += transformedLetter;
    };
    return transformedText;
};

var encrypt = () => {    
    document.getElementById("text-box-b").innerHTML = transformText("text-box-a", plainAlphabet, encryptedAlphabet); ;
};

var decrypt = () => {
    document.getElementById("text-box-a").innerHTML = transformText ("text-box-b", encryptedAlphabet, plainAlphabet);
};

// Registro de eventos
document.getElementById("button-encrypt").addEventListener("click", encrypt);
document.getElementById("button-decrypt").addEventListener("click", decrypt);


// GENERADOR ALETORIO - Ejercicio 2

var getRandom = (range, min) => {
    newNumber = Math.floor (Math.random() * range) + min;
	return newNumber;
};

var checkNumber = (list, x) =>{
    if (list.length === 0) return -1;
    else return list.indexOf(x);
};

var randomPick = (n, min, max) => {
    var range = max - min + 1;
    if (n > range) {
        console.log("¡ERROR! - La cantidad de números aleatorios que deseas es mayor que la cantidad de números disponibles.")
    } else {
        var numbersList = [];
            do {
                getRandom(range, min);
                if (checkNumber(numbersList, newNumber) === -1) numbersList.push(newNumber);
            } while (numbersList.length < n);
            
        return console.log("Listado de números: " + numbersList);
        };
};

randomPick (4, 5, 10);