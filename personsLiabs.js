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


//*****


const myFunction = (name, job, hourRate, hoursOfWorked) => {

    const myObject = {
        name: name,
        job: job,
        hourRate: hourRate,
        hoursOfWorked: hoursOfWorked,
        salaryPerDay: function() {
            return this.hourRate * this.hoursOfWorked
        }
    }

    const myString = `Hello I am ${name}, my job is only a ${job} and I earn ${myObject.salaryPerDay()} Pesos per day.`

    return myString
}

