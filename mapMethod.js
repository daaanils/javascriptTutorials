const result1 = (numbers) => {

    let result = []

    for (const number of numbers) {
       result.push(number * 2)
    }

    return result



}

//****** map method

console.log(result1([1, 2, 3 , 4]))

let result2 = [1, 2, 3, 4, 5].map(number => number * 2)

console.log(result2) 
