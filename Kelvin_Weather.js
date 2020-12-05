// Forecast for today in kelvin.
const kelvin = 293;
// Convert from Kelvin to Celsius.
const celsius = kelvin - 273;
// Convert from Celsius to Fahrenheit.
let fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// Extra practice.
let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} newton.`);