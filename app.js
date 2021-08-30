const initialPrice =document.querySelector('#initial-price')
const stockQuantity = document.querySelector('#stocks-quantity')
const currentPrice =document.querySelector('#current-price')
const submitButton = document.querySelector('#submit')
const outputBox = document.querySelector('#output-box')


function calculateProfitAndLoss(inital,quantity,current){

    if(inital > current){
        let loss = (inital-current)*quantity;
        let lossPercentage = (loss/inital)*100
        console.log("the loss is :" + loss)
        console.log("the loss is in %  :" + lossPercentage)

    }
    else if(current> inital){
        let profit = (current-inital)*quantity;
        let profitPercentage = (profit/inital)*100
        console.log("the profit is ",+ profit)
        console.log(profitPercentage)
      
    }
    else{

    }
}

calculateProfitAndLoss(100,10,50)


// submitButton.addEventListener("click",consoleClicked)