//  create a function that converts hour, minute and seconds into milliseconds

 const past = (h, m, s) => {

    const milliseconds = (h * 3600000) + (m * 60000) + (s * 1000)

    return milliseconds
 }

 console.log(past(5, 2, 1))
