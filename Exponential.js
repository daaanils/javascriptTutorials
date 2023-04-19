

const double = (numbers) => {
    let result = []

    for (const number of numbers) {
        result.push(number ** 2)
    }

    return result
}



console.log(double([1, 2, 3, 4, 5, 6, 7]))
