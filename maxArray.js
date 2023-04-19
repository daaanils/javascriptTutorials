const max = (numbers) => {
    let result = numbers[0]

    for (const number of numbers) {
        if (number > result) {
            result = number
        }
    }

    return { result }


}

console.log(max([1, 2, 3, 4, 5, 3, 4, 6]))
