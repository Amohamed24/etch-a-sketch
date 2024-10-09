// create a webpage with a 16x16 grid of square divs
// create using javascripy
// div where flexbox of two




const container = document.querySelector("#container"); 


for (let i = 0; i<16; i++) {
const gridsquare = document.createElement("div");
gridsquare.setAttribute("class", "squ") // create class to later call


gridsquare.setAttribute("style", "width: 125px; height: 125px; border: 4px solid darkslategray; background: skyblue;");
container.appendChild(gridsquare);
}

// get all the square elements
const squElements = document.querySelectorAll(".squ"); // select by class

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