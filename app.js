const initialPrice = document.querySelector('#initial-price')
const stockQuantity = document.querySelector('#stocks-quantity')
const currentPrice = document.querySelector('#current-price')
const submitButton = document.querySelector('#submit')
const outputBox = document.querySelector('#output-box')




function submitHandler(){
  let ip =initialPrice.value
  let qty = stockQuantity.value
  let cp = currentPrice.value

  calculateProfitAndLoss(ip,qty,cp)

  

}

function calculateProfitAndLoss(inital, quantity, current) {

    if (inital > current) {
        let loss = (inital - current) * quantity;
        let lossPercentage = (loss / inital) * 100
        outputBox.innerText = `the loss is ${loss} and loss percentage is ${lossPercentage}% `

    } else if (current > inital) {
        let profit = (current - inital) * quantity;
        let profitPercentage = (profit / inital) * 100
        outputBox.innerText = `the profit is ${profit} and profit percentage is ${profitPercentage}% `

    } else {
        outputBox.innerText =`no pain ,no gain`
    }
}

// calculateProfitAndLoss(10,10,100)


submitButton.addEventListener("click",submitHandler)