// create a webpage with a 16x16 grid of square divs
// create using javascripy
// div where flexbox of two



const container = document.querySelector("#container"); 


for (let i = 0; i<16; i++) {
let gridsquares = document.createElement("div");

gridsquares.setAttribute("style", "width: 125px; height: 125px; border: 4px solid darkslategray; background: skyblue;");
container.appendChild(gridsquares);
}

