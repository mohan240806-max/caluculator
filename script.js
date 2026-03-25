function display(value) {
    let result = document.getElementById("result");
    if (result.value === "0" && value !== "C") {
        result.value = value;
    } else if (result.value === "Error") {
        result.value = value;
    } else {
        result.value += value;
    }
}

function calculate() {
    let result = document.getElementById("result");
    try {
        let expression = result.value
            .replace(/Math\.PI/g, Math.PI)
            .replace(/sin\(/g, 'sinDeg(')
            .replace(/cos\(/g, 'cosDeg(')
            .replace(/tan\(/g, 'tanDeg(')
            .replace(/log\(/g, 'Math.log10(');
        
        let answer = eval(expression);
        result.value = Number(answer.toFixed(8));
        
        if (isNaN(result.value) || !isFinite(result.value)) {
            result.value = "Error";
        }
    } catch (error) {
        result.value = "Error";
    }
}

function clearScreen() {
    document.getElementById("result").value = "0";
}

// Degree-based trigonometric functions (like real calculators)
function sinDeg(x) {
    return Math.sin(x * Math.PI / 180);
}

function cosDeg(x) {
    return Math.cos(x * Math.PI / 180);
}

function tanDeg(x) {
    return Math.tan(x * Math.PI / 180);
}
