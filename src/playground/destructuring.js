// const person = {
//   name: "Jethro",
//   age: 21,
//   location: {
//     city: "Bogota",
//     temp: 34
//   }
// };

// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}`);

// const { temp: temperature, city } = person.location;

// console.log(`It's ${temperature} in ${city}`);

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-published" } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

const address = [
  "1299 South Juniper Street",
  "Philadelphia",
  "Pennslyvania",
  "19947"
];

const [, city, state = "New York"] = address;

console.log(`You are in ${city} ${state}.`);

const [item, , price] = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

console.log(`A medium ${item} costs ${price}.`);
