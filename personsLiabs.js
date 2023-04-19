const introducer3 = (name, shirt, assets, liabilities) => {

    const person = {
        name: name,
        shirt: shirt,
        assets: assets,
        liabilities: liabilities,
        netWorth: function () {
            return this.assets - this.liabilities
        }

    }

    const intro = `Hello! My name is ${name}, and the color of my shirt is ${shirt}. And my net worth is ${person.netWorth()} Pesos`

    return intro
}

console.log(introducer3('Danilo', 'Black', 100000, 50000))
