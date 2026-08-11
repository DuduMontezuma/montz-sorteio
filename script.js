function generateNumber() {
    const min = Math.ceil(document.querySelector(".value01").value)
    const max = Math.floor(document.querySelector(".value02").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min

    const textResult = document.querySelector(".result")

    textResult.innerHTML = `O número sorteado é: ${result}`
}