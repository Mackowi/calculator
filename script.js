const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display')
const clear = document.querySelector('.clear')
let operator = false;

function process(button) {
    switch (button.id) {
        case 'clear':
            display.textContent = '';
            break;
        case '-':
        case '+':
        case '*':
        case '/':
            if (!operator) {
                display.textContent += `${button.id}`;
                operator = true;
            }
            break;
        case '=':
            calculate();
            operator = false;
            break;
        default:
            display.textContent += `${button.id}`;
            break;
        }
}

function calculate() {
    let values = display.textContent.match(/(-?(\d+))(\+|-|\*|\/)(-?(\d+))/);
    let result = null;
    if (values[3] == '/' && Number(values[4]) == 0) {
        console.log('here')
        alert('Canot divide by 0 you moron!');
        display.textContent = '';
        return;
    }
    switch (values[3]) {
        case '+':
            result =  Number(values[1]) + Number(values[4]);
            display.textContent = `${result}`;
            break;
        case '-':
            result =  Number(values[1]) - Number(values[4]);
            display.textContent = `${result}`;
            break;
        case '*':
            result =  Number(values[1]) * Number(values[4]);
            display.textContent = `${result}`;
            break;
        case '/':
            result =  Number(values[1]) / Number(values[4]);
            display.textContent = `${result}`;
            break;
    }
}



buttons.forEach(button => button.addEventListener('click', () => {
    process(button);
}))

clear.addEventListener('click', () => {
    process(clear);
    operator = false;
})

window.addEventListener('keydown', (e) => {
    if (e.key == 'Backspace') {
        if (display.textContent.length >= 1) {
            display.textContent = display.textContent.slice(0, -1)
        }
    }
});

