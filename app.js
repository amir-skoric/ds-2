var hashAlgo = document.getElementById("hash-algo");
let hashText = document.getElementById("hash-text")
let hashedText = document.getElementById("hashed-text")
let hashBtn = document.getElementById("hash-btn")

hashBtn.addEventListener("click", () => {
    var value = hashAlgo.options[hashAlgo.selectedIndex].value;
    var result = CryptoJS[value](hashText.value)
    hashedText.innerHTML = result
})