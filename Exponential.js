
const numbers = [1, 2, 4, 5, 6, 7]

const double = (numbers) => {
    let result = []

    for (const number of numbers) {
        result.push(number ** 2)
    }

    return result
}
