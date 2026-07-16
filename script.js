const password = document.getElementById("password");
const length = document.getElementById("length");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}<>?/";

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {

    if (password.value === "") {
        alert("Generate a password first.");
        return;
    }

    navigator.clipboard.writeText(password.value);

    alert("Password copied!");

});

function generatePassword() {

    let characters = "";

    if (uppercase.checked) characters += upperChars;
    if (lowercase.checked) characters += lowerChars;
    if (numbers.checked) characters += numberChars;
    if (symbols.checked) characters += symbolChars;

    if (characters === "") {
        alert("Please select at least one character type.");
        return;
    }

    let generatedPassword = "";

    for (let i = 0; i < Number(length.value); i++) {

        const randomIndex = Math.floor(Math.random() * characters.length);

        generatedPassword += characters[randomIndex];

    }

    password.value = generatedPassword;

}

generatePassword();
