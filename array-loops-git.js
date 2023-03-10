////////////////////////////////
// Easy Going
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

////////////////////////////////

////////////////////////////////
// Get Even

// for (let i = 0; i <= 200; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
////////////////////////////////

////////////////////////////////
// Fizz Buzz

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }
////////////////////////////////

////////////////////////////////
// Wild Wild Life
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant", 5000, "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// const newArr = function (arr, newItem) {
//   arr.pop();
//   arr.push(newItem);
// };
// plantee[2] = 5001;
// console.log(plantee);

// newArr(wolfy, "Gotham City");
// console.log(wolfy);

// dart.push("Hawkins");
// console.log(dart);
// wolfy.splice(0, 1, "Gameboy");
// console.log(wolfy);

////////////////////////////////

////////////////////////////////
// Yell at the Ninja Turtles
// const ninjaTurtles = ["Leonardo", "Donatello", "Michaelangelo", "Raphael"];
// for (const value of ninjaTurtles) {
//   console.log(value.toUpperCase(value));
// }
////////////////////////////////

////////////////////////////////
// Methods, Revisited
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
console.log(favMovies.indexOf("Titanic"));

console.log(favMovies.sort()); //original array is sorted no copy is made//
console.log(favMovies.pop()); //return the element popped, pops the last element of array
console.log(favMovies);
favMovies.push("Guardians of the Galaxy"); //adds element to the end of the array
console.log(favMovies);
favMovies.reverse(); //original array is reversed no copy is made//
console.log(favMovies);
favMovies.shift(); //will remove the first element of an array , can return the element removed//
console.log(favMovies);
//favMovies.unshift('Pulp Fiction')//will add any amount of elements to front of array; will return the array.length//

favMovies.splice(14, 1, "Avatar"); //removes element at 'a', how many elements 'b' and string or element that will replace it (splice(a,b, newElement))
console.log(favMovies);

let half = 0.5 * favMovies.length;

console.log(favMovies.slice(half)); //slice(a,b) can give it a starting index and ending index to slice: end index not included
// console.log(favMovies);

console.log(favMovies.indexOf("Volver"));

////////////////////////////////

////////////////////////////////
// Where is Waldo
////////////////////////////////

////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
