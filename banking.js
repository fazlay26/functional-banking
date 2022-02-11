function getInputValue(inputId) {
    const inputFeild = document.getElementById(inputId);
    const inputAmountText = inputFeild.value;
    const amountValue = parseFloat(inputAmountText)
    inputFeild.value = '';
    return amountValue;
}
function updateTotalFeild(totalFeildId, depositAmount) {
    const totalElement = document.getElementById(totalFeildId);
    const TotalText = totalElement.innerText;
    const previousTotal = parseFloat(TotalText);
    totalElement.innerText = previousTotal + depositAmount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateTotalBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;

    }
}

document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalFeild('deposit-total', depositAmount);
        updateTotalBalance(depositAmount, true);
    }





})


document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
        updateTotalFeild('withdraw-total', withdrawAmount);
        updateTotalBalance(withdrawAmount, false);

    }
    if (withdrawAmount > currentBalance) {

        alert('sorry,you cant have sufficient balance');

    }




})