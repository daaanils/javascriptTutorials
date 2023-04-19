const filter = (numbers, greaterThan) => {

    let result = []

    for(const number of numbers) {

        if (number > greaterThan ) {
            result.push(number)
        }
    }

    return result
}

console.log(filter([1, 2, 3 , 4, 5], 3))

//ES6 features

const nums = [1, 2, 3, 4, 5]

const result = nums.filter(num => num > 3)

console.log(result)
