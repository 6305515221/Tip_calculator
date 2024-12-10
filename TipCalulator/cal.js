let billAmount=document.getElementById('billAmount')
let percentageTip=document.getElementById('percentageTip')
let tipAmount=document.getElementById('tipAmount')
let total=document.getElementById('total')
let messageContent=document.getElementById('messageContent')
let buttonColor=document.getElementById('buttonColor')


function calculate() {
    if(billAmount.value=='' || percentageTip.value=='') {
        buttonColor.style.backgroundColor='green'
        messageContent.textContent="PLEASE ENTER A VALID INPUT"
    }

    else {
        let tip=(parseInt(percentageTip.value)/100)*parseInt(billAmount.value)
        let totalAmount=parseInt(billAmount.value)+tip
        tipAmount.value=tip
        total.value=totalAmount
    }
}
