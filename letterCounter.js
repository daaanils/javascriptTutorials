
const letterCounter = () => {
    const phrase = 'hey, how are you today?'

    let result = 0;

    for (const letter in phrase) {
        console.log(Number(letter) + 1)
        result = Number(letter) + 1
    }

    return { result }
} 

console.log(letterCounter())
