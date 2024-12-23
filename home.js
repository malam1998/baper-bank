//event listener for deposit
let depositBtn = document.getElementById("deposit-btn");

let deposit = document.getElementById("depositInput").value;
console.log(deposit)
let depoAmount = parseFloat(deposit);

depositBtn.addEventListener("click", () => {


    //getting the balance
    const currentBalance = document.getElementById("currentBalance").innerText;
    const balance = parseFloat(currentBalance);

    //totaling deposit amount
    const total = balance + depoAmount;

    //updating current balance
    document.getElementById("currentBalance").innerText = total;

    //deposit value update
    const currentDepo = document.getElementById("currentDeposit").innerText;
    const currentDepoAmount = parseFloat(currentDepo)

    const depositTotal = currentDepoAmount + depoAmount;

    document.getElementById("currentDeposit").innerText = depositTotal;

    // if(depositTotal===0){

    // }
})

// event listener for withdraw
const withdrawBtn = document.getElementById("withdraw-btn");

withdrawBtn.addEventListener("click", () => {
    const withdrawInput = document.getElementById("withdrawInput").value;
    const withdrawInputValue = parseFloat(withdrawInput);

    const currentBalanceAfterWithdraw = document.getElementById("currentBalance").innerText;
    const balanceAmount = parseFloat(currentBalanceAfterWithdraw);

    // console.log("balanceAmount",balanceAmount)

    const withdrawTotal = balanceAmount - withdrawInputValue;
    // console.log("withdrawInput", withdrawTotal)

    document.getElementById("currentBalance").innerText = withdrawTotal;

    //withdraw amount update
    const withdrawAmount = document.getElementById("currentWithdraw").innerText;
    const currentWithdrawAmount = parseFloat(withdrawAmount);

    const withdrawTotalAmount = currentWithdrawAmount + withdrawInputValue;
    document.getElementById("currentWithdraw").innerText = withdrawTotalAmount;
})