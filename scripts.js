console.log("teste")
const butao = document.querySelector(".button-sorteio")  
const butao2 = document.querySelector(".button-novamente")
function clickButton(){
    const number1 = Number(document.querySelector(".number1").value)
    const number2 = Number(document.querySelector(".number2").value)

    const min = Math.min(number1, number2)
    const max = Math.max(number1, number2)
    
    const resultText = document.querySelector(".result")
    const result = Math.floor(Math.random() * (max - min + 1)) + min
    resultText.innerHTML = result
}

butao2.addEventListener("click", clickButton)
butao.addEventListener("click", clickButton)

