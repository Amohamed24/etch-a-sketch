


const button = document.querySelector("#btn")
button.addEventListener("click", () => {
    gridSize(gridsInput)
})

// create function to take input and spit out # of square entered from promp
function gridSize() {
     let gridsInput = prompt("Enter the number of squares per side for the new grid: ")
     if(gridsInput != null) {
        for (gridsInput = 0; i<gridsInput; i++); {
            const gridsquare = document.createElement("div");
            gridsquare.setAttribute("style", `width: calc(100% / ${gridsInput} ); height: calc(100% / ${gridsInput}); border: 1px solid black; background: white; margin: 0; padding: 0; box-sizing: border-box;`);
            container.appendChild(gridsquare);
        }
    } alert(`You selected ${gridsInput} squares per side!`)
}