// create a webpage with a 16x16 grid of square divs
// create using javascripy
// div where flexbox of two


const container = document.querySelector("#container"); 

function createGrid(size) {
// default squares are 16
for (let grids = 0; grids <size *size; grids++) {
const gridsquare = document.createElement("div");
gridsquare.setAttribute("class", "squ") // creates class to later call

gridsquare.setAttribute("style", `width: calc(100% / ${size}); height: calc(100% / ${size}); border: 1px solid black; background: white; margin: 0; padding: 0; box-sizing: border-box;`);
container.appendChild(gridsquare);
}
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;


const squElements = document.querySelectorAll(".squ"); 
// add mouseover event listener to each square
squElements.forEach((squ) => {
    squ.addEventListener('mouseover', () => {
        // change the background color
        squ.style.backgroundColor = "yellow";
    });
});

squElements.forEach((squ) => {
    squ.addEventListener('mouseout', () => {
        // change the background color
        squ.style.backgroundColor = "skyblue";
    });
});


const reset = document.querySelector("#reset")
reset.addEventListener('click', () => {
    // function to turn all squares white
    resetGame()
})

// function to reset the squares colors
function resetGame() {
    squElements.forEach((squ) => {
        squ.style.backgroundColor = "white"
    })
}
}

createGrid(16)

const button = document.querySelector("#btn")
button.addEventListener("click", () => {
    gridSize()
})

// create function to take input and spit out # of square entered from promp
function gridSize() {
    let grids = prompt("Enter the number of squares per side for the new grid. Must be >=40: ")
    if (grids && grids > 0 & grids < 40) {
        container.innerHTML = '';
        createGrid(grids); 
    } else {
        alert("Please enter a valid number!")
    }
}