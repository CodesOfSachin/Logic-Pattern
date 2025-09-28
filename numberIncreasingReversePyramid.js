let noOfRow = 4;

function reverseNumberPyramid(noOfRow) {
    for(let i = noOfRow; i > 0; i--) {
    let str = ""
    for(let j = 1; j <= i; j++) {
        str += j + " "
    }
    console.log(str)
}}

reverseNumberPyramid(noOfRow)