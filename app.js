const initialPrice = document.querySelector('#initial-price')
const stockQuantity = document.querySelector('#stocks-quantity')
const currentPrice = document.querySelector('#current-price')
const submitButton = document.querySelector('#submit')
const outputBox = document.querySelector('#output-box')




function submitHandler(){
  let ip =  Number(initialPrice.value)
  let qty = Number(stockQuantity.value)
  let cp =  Number(currentPrice.value)

  calculateProfitAndLoss(ip,qty,cp)
}

function calculateProfitAndLoss(inital, quantity, current) {

    if (inital > current) {
        let loss = inital - current
        let lossInQuantity = (inital - current) * quantity;
        let lossPercentage = (loss / inital) * 100
        // outputBox.innerText = `the loss is ${loss} and loss percentage is ${lossPercentage}% `
        showMessage(`the loss is ₹ ${lossInQuantityoss} and loss percentage is ${lossPercentage}% `)

    } else if (current > inital) {
        let profit = current - inital
        let profitInQuantity = (current - inital) * quantity;
        let profitPercentage = (profit / inital) * 100
        // outputBox.innerText = `the profit is ${profit} and profit percentage is ${profitPercentage}% `

        showMessage(`the profit is ₹ ${profitInQuantity} and profit percentage is ${profitPercentage}%`)

    } else {
        showMessage(`no pain ,no gain`)
    }
}

function showMessage(message){

outputBox.innerHTML= message
}

submitButton.addEventListener("click",submitHandler)