

export function circleFadeIn(event) {
    let element = event.currentTarget;
    element.classList.remove("fade_out"); 
    element.classList.add("fade_in");
}

export function circleFadeOut(event) {
    let element = event.currentTarget;
    element.classList.remove("fade_in"); 
    element.classList.add("fade_out");
}

export function makeMark(mark, element) {
    console.log(mark);
    element.classList.add(mark);
    element.removeEventListener("mouseover", circleFadeIn); 
    element.removeEventListener("mouseout", circleFadeOut); 
    element.textContent = mark;
}