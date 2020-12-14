// // variables
const button = document.querySelector('button');
const container = document.querySelector('#container');
let newGridSize = 0;


// Button
button.addEventListener('click', function(){
    const div = document.querySelectorAll('.grid');
    for(i = 0; i < div.length; i ++) {
        div[i].remove(div);
    };
    createGrid(newGridArea());
});

// // CSS grid to create the grid area
function createGrid(gridNumber) {
    let gridArea = gridNumber * gridNumber;
    for(i = 1; i <= gridArea; i++) {
        // console.log(gridArea);
        let gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`
        // gridItem.innerText = i;
        gridItem.classList.add('grid')
        gridItem.addEventListener('mouseover', function(e){
            e.target.classList.add('mouse');
        });
        container.appendChild(gridItem);
    };
};

function newGridArea () {
    newGridSize = parseInt(prompt('What size for the next grid?', '16'));
    if(newGridSize >= 17 ) {
        newGridSize = parseInt(prompt('Max grid size is 16', '16'));
    };
    return newGridSize;
};

function colorChange() {

};

// function calls
createGrid(5);