
let outputValue = '0'

function updateOutput() {
    document.getElementById('input').textContent = outputValue;
}

function appendToit(value) {
    if (outputValue === '0' && value !== '.') {
        outputValue = value
    } else {
        outputValue += value;
    }
    updateOutput()
}

function clearOutput() {
    outputValue = '0'
    updateOutput()
}

function calculate() {
    try {
        outputValue = eval(outputValue).toString();
        updateOutput()
    } catch (error) {
        outputValue = 'Error';
        updateOutput()
    }
}

function toogleSign () {
    if (outputValue !=='0') {
        outputValue = (parseFloat(outputValue) * -1).toString()
        updateOutput()
    }
}