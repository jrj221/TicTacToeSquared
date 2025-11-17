

export function makeMark(mark, element) {
    console.log(mark);
    element.classList.add(mark);
    element.classList.remove("unmarked_square");
    element.classList.add("marked_square");
    element.textContent = mark;
}