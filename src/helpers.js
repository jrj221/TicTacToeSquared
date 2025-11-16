export function events() {
    let squares = document.getElementsByClassName("select-circle");
    for (let square of squares) {
        square.addEventListener("mouseover", () => {square.classList.remove("fade_out"); square.classList.add("fade_in");}); 
        square.addEventListener("mouseout", () => {square.classList.remove("fade_in"); square.classList.add("fade_out");}); 
    }
}