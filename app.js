const button = document.querySelector('.submit');
const input = document.querySelector('.input');
const output = document.querySelector('.output');
let count = 3;
let ans = parseInt(3 * Math.random() + 1);
console.log(ans);
button.addEventListener('click', runEvent);

function runEvent() {
    if (button.textContent == "Restart") {
        output.innerHTML = ``;
        button.textContent = 'submit';
        input.value = '';
        return;
    }
    if (input.value == ans) {

        output.innerHTML = ``;
        output.style.color = 'green';
        output.appendChild(document.createTextNode('Congrats! You won'));
        button.textContent = "Restart";
        ans = parseInt(3 * Math.random() + 1);
        count = 3;
    }
    else {
        count--;
        if (count === 0) {
            output.style.color = 'red';
            output.innerHTML = ``;
            output.appendChild(document.createTextNode(`Game Over`));
            button.textContent = "Restart";
            ans = parseInt(3 * Math.random() + 1);
            count = 3;
        }
        else {
            output.style.color = 'red';
            output.innerHTML = ``;
            output.appendChild(document.createTextNode(`Wrong ans! you have ${count} tries left`));
        }
    }

    console.log(ans);
}