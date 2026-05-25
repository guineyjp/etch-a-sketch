for (i = 0; i < 256; i++) {
    //creating a square element

const square = document.createElement("div");

square.classList.add("square");


square.addEventListener("mouseover", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
} )



//append square as a child inside container div
document.getElementById("container").appendChild(square);

}

//now need to create button and event listener when user clicks button they can enter number of squares in the grid

//select resize button from DOM
const button = document.querySelector("#resize-btn");

button.addEventListener("click", () => {

    let userInput = prompt("Enter number of squares (maximum 100)");
    document.getElementById("container").innerHTML ="";

    //creating an if statement to limit user input to 100

    if (userInput > 100) {
         alert("Sorry, you must enter a value of 100 or less.")
    } else {
    for (i = 0; i < userInput * userInput; i++) {

    //creating a square element

const square = document.createElement("div");

square.classList.add("square");

/*the size of each box should be defined by the total number of squares and the overall size of the page
Size of the page is fixed at 960px width and 960px height,*/

square.style.width = (960 / userInput) + "px";
square.style.height = (960 / userInput) + "px";
//append square as a child inside container div
document.getElementById("container").appendChild(square);

square.addEventListener("mouseover", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() *256);
    const b = Math.floor(Math.random() *256);

    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`}
)    
     }
    }
})


