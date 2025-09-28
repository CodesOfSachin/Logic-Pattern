let noOfRow = 6;

function numChangingPyramid(noOfRow) {
    let num = 1;
    for(let i = 1; i <= noOfRow; i++) {
        let str = ""
        for(let j = 1; j <= i; j++) {
            str += num + " "
            num++
            }
            console.log(str)
        }
    }


numChangingPyramid(noOfRow)