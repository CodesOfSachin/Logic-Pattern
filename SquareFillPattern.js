let noOfRow = 7;

function squareFillPattern(n) {
    for(let i = 1; i <= n; i++) {
        let str = ""
        for(let j = n; j >= 1; j--) {
            str += " *"
        }
        console.log(str)
    }
}

squareFillPattern(noOfRow)