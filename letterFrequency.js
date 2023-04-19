 const letterFrequency = (phrase) => {
    
    // make a frequency onject{}
    let frequency = {}
    //make a loop that iterate the letter in the phrase
    for (const letter of phrase) {
        //make conditions if the letter exist in frequency
        if (letter in frequency) {
              // it should be increment by 1
              frequency[letter] += 1

              // otherwise, set the value to 1
        }else {
            frequency[letter] = 1
        }
     
    }
    


    return frequency
 }

 console.log(letterFrequency('yoyooyoy'))
