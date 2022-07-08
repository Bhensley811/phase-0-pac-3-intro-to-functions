// Follow along with the examples here
function sayHello() {
    console.log("Hello!");
  }

sayHello(); 



function fruits(num1, num2) {
    return num1 + num2;
}

function veggies(num3, num4) {
    return num3 + num4;
}


// Inpuyt Apples first then oranges 
const numOfFruits = fruits(3, 4);
const fruitsToday = ` Fruits: You've had ${numOfFruits} Today! `

// input Broccoli then Spinach
const numOfVeggies = veggies(2, 4);
const veggiesToday = ` Veggies: You've had ${numOfVeggies} Today! `

console.log(fruitsToday)
console.log(veggiesToday)

    