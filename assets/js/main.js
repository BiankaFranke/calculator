console.log('it works');

let calculator = document.getElementById('result');
let buttons = Array.from(document.getElementsByClassName('button'));

console.log(buttons);

buttons.map(button => {
    button.addEventListener('click', (event) => {
        switch(event.target.innerText) {
            case 'c':
                calculator.innerText = '0';
                break;
            case '=':
                calculator.innerText = eval(calculator.innerText);
                break;
            default:
                calculator.innerText += event.target.innerText;
        } 
    });
});