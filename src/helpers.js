var marks_array = Array.from({ length: 9 }, () => Array(9).fill(null)); // will need to do server memory to avoid reloads messing this up
var outerArray = Array(9).fill(null);

export function makeMark(mark, element, outIndex, innerIndex) {
    element.classList.add(mark);
    element.classList.remove("unmarked_square");
    element.classList.add("marked_square");
    console.log(`${mark} => [${outIndex}][${innerIndex}]`);
    marks_array[outIndex][innerIndex] = mark;
    checkInnerWin(outIndex, marks_array[outIndex]);
    element.textContent = mark;
}

function checkInnerWin(outIndex, innerArray) {
    for (let i = 0; i < 9; i+=3) {
        if ((innerArray[i] != null && innerArray[i] == innerArray[i+1]) && innerArray[i+1] == innerArray[i+2]) { // row win
            outerArray[outIndex] = innerArray[i];
            const innerGameEl = document.getElementById(outIndex + "game");
            innerGameEl.style.opacity = 0.2;

            const innerGameMarkEl = document.getElementById(outIndex + "mark");
            console.log(innerArray[i]);
            let imgName = innerArray[i] == 'X' ? `url("/public/blueX.png")` : `url("/public/greenO.png")`;
            innerGameMarkEl.style.backgroundImage = imgName;
            innerGameMarkEl.style.zIndex = 1;            
            console.log("ROW WIN");
        }
    }
    for (let i = 0; i < 3; i++) {
        // console.log(`${innerArray[i]}, ${innerArray[i+3]}, ${innerArray[i+6]}`)
        if ((innerArray[i] != null && innerArray[i] == innerArray[i+3]) && innerArray[i+3] == innerArray[i+6]) { // row win
            console.log("COLUMN WIN");
        }
    }
    if (((innerArray[0] != null && innerArray[0] == innerArray[4]) && innerArray[4] == innerArray[8]) ||
        ((innerArray[6] != null && innerArray[6] == innerArray[4]) && innerArray[4] == innerArray[2])) { // diag win 
            console.log("DIAGONAL WIN");
    }
}

// 0 1 2
// 3 4 5
// 6 7 8