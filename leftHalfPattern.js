let noOfRow = 5;

// function leftHalfPattern(n) {
//     for(let i = 1; i <= n; i++) {
//         let str = ""
//         for(let j = 1; j <= n; j++) {
//             if((i + j) > (n)) {
//                 str += "*"
//                 // console.log(i, j)
//             } else {
//                 str += " "
//             }
//         }
//         console.log(str);
//     }
// }

// improved version
function leftHalfPattern(n) {
    for(let i = 1; i <= n; i++) {
        const spaces = " ".repeat(n - i); // creates spaces 
        const stars = "*".repeat(i); // creates stars required to print
        console.log(spaces + stars)
    }
}

leftHalfPattern(noOfRow)