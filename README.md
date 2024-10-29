<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel ="stylesheet" href="style.css"/>
</head>
<body>
    <div id="calculator">
        <input id="display" readonly>
        <div id="keys">
            <button onClick="appendtoDisplay('+')"class="operator-btn">+</button>
            <button onClick="appendtoDisplay('7')">7</button>
            <button onClick="appendtoDisplay('8')">8</button>
            <button onClick="appendtoDisplay('9')">9</button>
            <button onClick="appendtoDisplay('-')"class="operator-btn">-</button>
            <button onClick="appendtoDisplay('6')">6</button>
            <button onClick="appendtoDisplay('5')">5</button>
            <button onClick="appendtoDisplay('4')">4</button>
            <button onClick="appendtoDisplay('*')"class="operator-btn">*</button>
            <button onClick="appendtoDisplay('3')">3</button>
            <button onClick="appendtoDisplay('2')">2</button>
            <button onClick="appendtoDisplay('1')">1</button>
            <button onClick="appendtoDisplay('/')"class="operator-btn">/</button>
            <button onClick="appendtoDisplay('0')">0</button>
            <button onClick="appendtoDisplay('.')">.</button>
            <button onClick="calculateA()">=</button>
            <button onClick="clearDisplay()"class="operator-btn">c</button>
        </div>
    </div>
