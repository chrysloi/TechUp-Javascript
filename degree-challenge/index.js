//creating a constant variable kelvin
const kelvin = 293;
//create a new celsius variable which is less than kelvin 273 deg
const celsius = kelvin - 273;
//calculating fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//rounding fahrnheit in case it is decimal number
fahrenheit = Math.floor(fahrenheit);
//converting celsius to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log("The temperature is " + celsius + " degrees celsius.\n");

console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.\n");

console.log("The temperature is " + newton + " degrees Newton.");