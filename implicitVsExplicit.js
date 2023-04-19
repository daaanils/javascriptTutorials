//implicit return
const sum = (a, b) => b === 0 ? 'The number cannot divide by zero': a / b

console.log(sum(2,0))

//*****

//explicit return
function sum2(a, b) {

    if (b === 0) {
        return 'The number cannot divide by zero'
    }

    return a / b
}
