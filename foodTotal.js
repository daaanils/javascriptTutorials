function calculatedFoodTotal(food, tip) {
    const tipPercentage = tip / 100
    const tipAmount = food * tipPercentage
    const total = sumArrow(food, tipAmount)

    return total
}

const result = calculatedFoodTotal(500, 30)
console.log(result)
