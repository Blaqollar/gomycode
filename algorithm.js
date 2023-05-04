var a = 7
var b = 9

var sum = a + b 

function summation(n) {
    let sum = 0;
    for (var i = 0; i < n; i++) { //1,4,1,1
        sum += i
    }

    return sum
}


console.log(sum)