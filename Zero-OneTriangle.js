let noOfRow = 7;

// function zeroOneTriangle(n) {
//     for(let i = 1; i <= n; i++) {
//         let str = "";
//         for(let j = 1; j <= i; j++) {
//             if(i % 2 == 0) {
//                 if(j % 2 == 0) {
//                     str += 1 + " "
//                 } else {
//                     str += 0 + " "
//                 }
//             } else {
//                 if(j % 2 == 0) {
//                     str += 0 + " "
//                 } else {
//                     str += 1 + " "
//                 }
//             }
//         }
//         console.log(str);
//     }
// }

// optimal solution
function zeroOneTriangle(n) {
    for(let i = 1; i <= n; i++) {
        let str = "";
        for(let j = 1; j <= i; j++) {
            if( (i + j) % 2 == 0) {
                str += 1 + " "
            } else {
                str += 0 + " "
            }
        }
        console.log(str);
    }
}

zeroOneTriangle(noOfRow)