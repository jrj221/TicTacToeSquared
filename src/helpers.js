var marks_array = Array.from({ length: 9 }, () => Array(9).fill(null)); // will need to do server memory to avoid reloads messing this up
var outerArray = Array(9).fill(null);

export function makeMark(mark, element, outIndex, innerIndex) {
    element.classList.add(mark);
    element.classList.remove("unmarked_square");
    element.classList.add("marked_square");
    console.log(`${mark} => [${outIndex}][${innerIndex}]`);
    marks_array[outIndex][innerIndex] = mark;
    checkInnerWin(outIndex, marks_array[outIndex], innerIndex);
    element.textContent = mark;
}

function checkInnerWin(outIndex, innerArray, innerIndex) {
    for (let i = 0; i < 9; i+=3) {
        if ((innerArray[i] != null && innerArray[i] == innerArray[i+1]) && innerArray[i+1] == innerArray[i+2]) { // row win
            winInner(outIndex, innerArray, innerIndex);          
        }
    }
    for (let i = 0; i < 3; i++) {
        if ((innerArray[i] != null && innerArray[i] == innerArray[i+3]) && innerArray[i+3] == innerArray[i+6]) { // row win
            winInner(outIndex, innerArray, innerIndex);  
        }
    }
    if (((innerArray[0] != null && innerArray[0] == innerArray[4]) && innerArray[4] == innerArray[8]) ||
        ((innerArray[6] != null && innerArray[6] == innerArray[4]) && innerArray[4] == innerArray[2])) { // diag win 
            winInner(outIndex, innerArray, innerIndex);  
    }
}

function checkOuterWin() {
    for (let i = 0; i < 9; i+=3) {
        if ((outerArray[i] != null && outerArray[i] == outerArray[i+1]) && outerArray[i+1] == outerArray[i+2]) { // row win
            console.log("BIG ROW WIN")
            winOuter();          
        }
    }
    for (let i = 0; i < 3; i++) {
        // console.log(`${innerArray[i]}, ${innerArray[i+3]}, ${innerArray[i+6]}`)
        if ((outerArray[i] != null && outerArray[i] == outerArray[i+3]) && outerArray[i+3] == outerArray[i+6]) { // row win
            console.log("BIG COLUMN WIN");
            winOuter();     
        }
    }
    if (((outerArray[0] != null && outerArray[0] == outerArray[4]) && outerArray[4] == outerArray[8]) ||
        ((outerArray[6] != null && outerArray[6] == outerArray[4]) && outerArray[4] == outerArray[2])) { // diag win 
            console.log("BIG DIAGONAL WIN");
            winOuter();   
    }
}



function winInner(outIndex, innerArray, innerIndex) {
    outerArray[outIndex] = innerArray[innerIndex];
    const innerGameEl = document.getElementById(outIndex + "game");
    innerGameEl.style.opacity = 0.2;

    const innerGameMarkEl = document.getElementById(outIndex + "mark");
    console.log(innerArray[innerIndex]);
    let imgName = innerArray[innerIndex] == 'X' ? `url("/public/goldX.png")` : `url("/public/blackO.png")`;
    innerGameMarkEl.style.backgroundImage = imgName;
    innerGameMarkEl.style.zIndex = 1;  

    checkOuterWin();
}

function winOuter() {
    const board = document.getElementById("board");
    board.style.pointerEvents = "none";
    board.style.backgroundColor = "#212226";
    board.style.borderColor = "#212226";
}

// 0 1 2
// 3 4 5
// 6 7 8