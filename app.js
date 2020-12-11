// Create a 16x16 grid of square divs

const container = document.querySelector('#container');
const gridDiv = document.getElementsByClassName('.grid');
let arr = [];
let div = ""


for(i = 0; i <= 255; i++) {
    div = document.createElement('div');
    div.classList.add('grid');
    div.textContent = i + 1;
    div.addEventListener('mouseover', function(e){
        e.target.classList.add('mouse');
    });
    arr.push(div);
    container.appendChild(div);
};

