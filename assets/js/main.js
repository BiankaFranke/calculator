// JS Check
console.log('it works');

// Declaration
let calculator = document.getElementById('result');
let history = document.getElementById("history");
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (event) => {
        switch(event.target.innerText) {
            case 'c':
                calculator.innerText = '0';
                history.innerText = '';
                break;
            case '=':
                calculator.innerText = eval(calculator.innerText);
                history.innerText = eval(calculator.innerText);
                break;
            default:
                calculator.innerText += event.target.innerText;
                history.innerText += event.target.innerText;
        } 
    });
});