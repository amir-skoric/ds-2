var hashAlgo = document.getElementById("hash-algo");
let hashText = document.getElementById("hash-text")
let hashedText = document.getElementById("hashed-text")
let hashBtn = document.getElementById("hash-btn")

hashBtn.addEventListener("click", () => {
    var value = hashAlgo.options[hashAlgo.selectedIndex].value;
    var result = CryptoJS[value](hashText.value)
    hashedText.innerHTML = result
})


//noget jeg fandt online, kan ikke helt finde ud af hvordan man laver den der one-time-pad, men den her funktion udskriver en str med random characters fra characters variablen :D
function randomStr(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}