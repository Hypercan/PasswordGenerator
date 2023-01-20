const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let option_1 = document.querySelector("#option1")
let option_2 = document.querySelector("#option2")
function generate() {
    randomPass(option_1)
    randomPass(option_2)
}

function randomPass(optionChoose) {
    let generatedPass = [];
    let characterPass = "";
    let fixedPassword = "";
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        let characterPass = characters[randomIndex];
        generatedPass.push(characterPass)
        fixedPassword = generatedPass.join("")
    }
    optionChoose.textContent = fixedPassword;
}

function copyItem(elementer) {
    var password = elementer.innerHTML;
    navigator.clipboard.writeText(password).then(function () {
        alert('Copying to clipboard was successful!');
    }, function (err) {
        alert('Failed to copy text: ', err);
    });
}
