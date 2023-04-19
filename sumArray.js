const sumArray = (numbers) => {

    let result = 0

    for (const number of numbers) {
        result += number
    }

    return { result }

}   

const nums = [1, 2, 3, 4, 5]
