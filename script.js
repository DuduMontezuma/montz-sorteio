function generateNumber() {
    const min = Math.ceil(document.querySelector(".value01").value)
    const max = Math.floor(document.querySelector(".value02").value)

    if (min >= max) {
        alert("O primeiro valor precisa ser menor que o segundo!")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min
    
        const textResult = document.querySelector(".result")
    
        textResult.innerHTML = `O número sorteado é: ${result}`
    }

}