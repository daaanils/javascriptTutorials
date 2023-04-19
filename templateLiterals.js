const introducer = (brand, model) => {
    const car = {

        brand: brand,
        model: model
    }

    const intro = `Hi my dream car is  ${car.brand} and the model I want is ${car.model}`

    return intro
}
console.log(introducer('Toyota', 'Fortuner'))
