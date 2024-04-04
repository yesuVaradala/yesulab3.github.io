// script.js
const form = document.getElementById('tipForm');
form.addEventListener('input', function() {
    const billTotalInput = document.getElementById('billTotal');
    const billTotal = billTotalInput.value;
    const tipSlider = parseFloat(document.getElementById('tipSlider').value);
    if (isNaN(billTotal) || !/^\d+(\.\d+)?$/.test(billTotal)) {
        billTotalInput.setCustomValidity('Please enter a valid number for the Bill Total');
        billTotalInput.reportValidity();
        return;
    } else {
        billTotalInput.setCustomValidity('');
    }
    const billTotalNum = parseFloat(billTotal);
    document.getElementById('tipPercentage').value = tipSlider.toFixed(2);
    const tipAmount = billTotalNum * (tipSlider / 100);
    document.getElementById('tipAmount').value = tipAmount.toFixed(2);
    document.getElementById('totalBillWithTip').value = (billTotalNum + tipAmount).toFixed(2);
});