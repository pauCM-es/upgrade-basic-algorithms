//? Iteracion #1: Variables

let myFavoriteHero = "Hulk"
let x = 50
let h = 5
let y = 10
let z = h = y

//? Iteracion #2: Variables avanzadas

// 1.1
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25
console.log(character);

// 1.2
let firstName = 'Jon'
let lastName = 'Snow'
let age = 24

console.log('Soy ' + firstName + ' ' + lastName + ', tengo' + age + ' años y me gustan los lobos.')

// 1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(toy1.price + toy2.price)

// 1.4
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000
car1.finalPrice = car1.basePrice + globalBasePrice
car2.finalPrice = car2.basePrice + globalBasePrice
console.log(car1, car2);

//? Iteracion #3: Operadores

// 1.1
console.log(10 * 5)

// 1.2
console.log(10 / 2)

// 1.3
console.log(15%9)

// 1.4
y = 10
z = 5
x = y + z
console.log(x)

// 1.5

x = y * z
console.log(x)

//? Iteracion #4: Arrays

// 1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0])

// 1.2
avengers[0] = "IRONMAN"
console.log(avengers)

// 1.3
console.log(avengers.length)

// 1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty", "Summer")
let lastCharacter = rickAndMortyCharacters.length - 1
console.log(rickAndMortyCharacters[lastCharacter])

// 1.5
rickAndMortyCharacters.push("Lapiz Lopez")

rickAndMortyCharacters.pop()
let newLastCharacter = rickAndMortyCharacters.length - 1
console.log(newLastCharacter)
console.log('Primer elemento: ' + rickAndMortyCharacters[0], 'Ultimo elemento: ' + rickAndMortyCharacters[newLastCharacter])

// 1.6
rickAndMortyCharacters.push("Lapiz Lopez")
rickAndMortyCharacters.splice(1 , 1)
console.log(rickAndMortyCharacters)

//? Iteracion #5: Condicionales

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}