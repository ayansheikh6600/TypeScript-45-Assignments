// Question #1
let person: string = "Eric";
console.log(`Hellow ${person}`);

// Question #2
console.log(person.toLocaleLowerCase());
console.log(person.toLocaleUpperCase());
console.log(person.charAt(0).toUpperCase() + person.slice(1));

// Question #3
console.log(
  "Albert Einstein once said, 'A person who never made a mistake never tried anything new'"
);

// Question #4
let famousPerson: string = "Albert Einstein";
let quote: string =
  "A person who never made a mistake never tried anything new.";
console.log(`${famousPerson} once said,"${quote}"`);

// Question #5
// let stripPerson : string = ""
console.log("\t" + person);
console.log(person + "\n" + person);

// Question #6
let eight: number = 2;
console.log(eight + 6);
console.log(eight * 4);
console.log(16 / eight);
console.log(10 - eight);

// Question #7
let favNumber: number = 4;
console.log(`My favorite Number is ${favNumber}`);

// Question #8
//Program written by Ayan Sheikh
//Date: 2024-03-21

//This program convert string camelCase to snake_case
const CameltoSanke = (camelString: string) => {
  let tempArry = [];
  for (var i = 0; i < camelString.length; i++) {
    // console.log(camelString[i]);
    if (camelString[i] == camelString[i].toUpperCase()) {
      // console.log(camelString[i])
      tempArry.push("_");
      tempArry.push(camelString[i].toLocaleLowerCase());
    } else {
      tempArry.push(camelString[i]);
    }
  }
  // console.log(tempArry.join("") , "tem");
  return tempArry.join("");
};
console.log(CameltoSanke("ayanSheikh"));

// Question #9
let friendsArry: string[] = ["Hamza", "Ismail", "Talha"];
for (var i in friendsArry) {
  console.log(friendsArry[i]);
}

// Question #10
for (var i in friendsArry) {
  console.log("How Are you " + friendsArry[i]);
}

// Question #11
let OwnArray: Array<[transport: string, brand: string]> = [];

OwnArray.push(["motocycle", "Honda"]);
OwnArray.push(["car", "Toyata"]);
OwnArray.push(["bicycle", "Hittachi"]);

OwnArray.forEach(([transport, brand]) => {
  console.log(`I would like to own a ${brand} ${transport}.`);
});
// Question #12

let guestArray: string[] = ["Faiz", "Talha", "Ismail"];
guestArray.forEach((i) => {
  console.log(i + ", please come to dinner.");
});

// Question #13
console.log("\n", guestArray);
console.log("\nSorry, " + guestArray[1] + " can't make it to dinner.");
delete guestArray[1];
guestArray[1] = "Saim";
console.log(guestArray);
guestArray.forEach((i) => {
  console.log(i + ", please come to dinner.");
});

// Question #14
console.log("Great news! We found a bigger dinner table!");
guestArray.unshift("Sufiyan");

guestArray.splice(Math.floor(guestArray.length / 2), 0, "Boss");
guestArray.push("Ishfahan");

guestArray.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
});

// Question #15
let guests: string[] = ["David", "Alice", "Bob", "Emily", "Charlie", "Fiona"];

console.log(
  "Unfortunately, the new dinner table won't arrive in time for the dinner. We can only invite two people."
);

while (guests.length > 2) {
  const removedGuest = guests.pop();
  console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

guests.forEach((guest) => {
  console.log(
    `Dear ${guest}, you are still invited to dinner. Please join us!`
  );
});
guests.splice(0);

console.log("Empty guest list:", guests);

// Question #16
let placesToVisit: string[] = [
  "Paris",
  "Tokyo",
  "Bora Bora",
  "New York",
  "Rome",
];

console.log("Original order:", placesToVisit);

console.log("Alphabetical order:", [...placesToVisit].sort());

console.log("Original order:", placesToVisit);

console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

console.log("Original order:", placesToVisit);

placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

placesToVisit.reverse();
console.log("Original order:", placesToVisit);

placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);

// Question #17
console.log("Number of people's invited to dinner:", guestArray.length);
let books: { [key: string]: { author: string; genre: string; pages: number } } =
  {
    "1984": { author: "George Orwell", genre: "Dystopian fiction", pages: 328 },
    "To Kill a Mockingbird": {
      author: "Harper Lee",
      genre: "Novel",
      pages: 281,
    },
    "Pride and Prejudice": {
      author: "Jane Austen",
      genre: "Romantic fiction",
      pages: 432,
    },
  };

for (let title in books) {
  console.log(
    `${title} by ${books[title].author} - Genre: ${books[title].genre}, Pages: ${books[title].pages}`
  );
}

// Question #18
console.log(
  "Attempting to access an index out of bounds:",
  guestArray[guestArray.length]
);

// Question #19

let car = "Jaguar";

console.log(car == "Jaguar");
console.log(2 === 2);
console.log(car.length === 6);
console.log(true === true);
console.log(car.indexOf("J") === 0);
console.log(2 != 2);
console.log(car.length != 6);
console.log(car.indexOf("J") != 0);
console.log(car != "Jaguar");
console.log(true != true);

// Question #20
let Questio20: string = "Ayan";

if (Questio20 === "Ayan") {
  console.log("Done Equality");
}

console.log(Questio20 === Questio20.toLocaleLowerCase());
// Equality test
let a: number = 5;
let b: number = 5;
console.log("Equality test:", a === b); // Output: true

// Inequality test
let c: number = 10;
let d: number = 5;
console.log("Inequality test:", c !== d); // Output: true

// Greater than test
let e: number = 10;
let f: number = 5;
console.log("Greater than test:", e > f); // Output: true

// Less than test
let g: number = 5;
let h: number = 10;
console.log("Less than test:", g < h); // Output: true

// Greater than or equal to test
let o: number = 10;
let j: number = 10;
console.log("Greater than or equal to test:", o >= j); // Output: true

// Less than or equal to test
let k: number = 5;
let l: number = 10;
console.log("Less than or equal to test:", k <= l); // Output: true

// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "orange", "grape"];
let fruitToCheck: string = "banana";
console.log("Is banana in the array?", fruits.includes(fruitToCheck)); // Output: true

// Test whether an item is not in an array
let vegetables: string[] = ["carrot", "broccoli", "spinach", "cucumber"];
let vegetableToCheck: string = "potato";
console.log(
  "Is potato not in the array?",
  !vegetables.includes(vegetableToCheck)
); // Output: true

// Test using "and" operator
let num1: number = 10;
let num2: number = 20;
let num3: number = 5;
console.log(
  "Is num1 greater than num3 and less than num2?",
  num1 > num3 && num1 < num2
); // Output: true

// Test using "or" operator
let isWeekend: boolean = false;
let isHoliday: boolean = true;
console.log("Is it a weekend or a holiday?", isWeekend || isHoliday); // Output: true

// Question #21
let alien_color: string = "green";

if (alien_color === "green") {
  console.log("Congratulations!  alien color is ", alien_color);
}
alien_color = "red";
if (alien_color === "green") {
  console.log("Congratulations!  alien color is ", alien_color);
}

if (alien_color === "green") {
  console.log("Congratulations!  alien color is ", alien_color);
} else {
  console.log("Oh! No Alien Color is ", alien_color);
}

if (alien_color === "green") {
  console.log(
    `If the alien is ${alien_color}, print a message that the player earned 5 points.`
  );
} else if (alien_color === "yellow") {
  console.log(
    `If the alien is ${alien_color}, print a message that the player earned 10 points.`
  );
} else if (alien_color === "red") {
  console.log(
    `If the alien is ${alien_color}, print a message that the player earned 15 points.`
  );
}

// Question #22
let age: number = 1;

if (age < 2) {
  console.log(`the person is a baby`);
} else if (age >= 2 && age < 4) {
  console.log(`the person is a toddler`);
} else if (age >= 4 && age < 13) {
  console.log(`the person is a kid`);
} else if (age >= 13 && age < 20) {
  console.log(`the person is a teenager`);
} else if (age >= 20 && age < 65) {
  console.log(`the person is a adult`);
} else if (age >= 65) {
  console.log(`the person is a elder`);
}
// Question #23
// Array of favorite fruits
let favorite_fruits: string[] = ["apple", "banana", "strawberry"];

// Check if specific fruits are in the array
if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes("strawberry")) {
  console.log("You really like strawberries!");
}

if (favorite_fruits.includes("orange")) {
  console.log("You really like oranges!");
} else {
  console.log("Oranges are not one of your favorite fruits.");
}

if (favorite_fruits.includes("kiwi")) {
  console.log("You really like kiwis!");
} else {
  console.log("Kiwis are not one of your favorite fruits.");
}

// Question #24

let usernames: string[] = ["admin", "Eric", "John", "Alice", "Emily"];

for (let username of usernames) {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

// Question #25
let usernames2 = [...usernames];
usernames2 = [];

if (usernames2.length === 0) {
  console.log("We need to find some users!");
}

// Question #26

let current_users: string[] = ["John", "Alice", "Eric", "David", "Emily"];

let new_users: string[] = ["Eric", "Michael", "Sarah", "john", "Daniel"];

for (let new_user of new_users) {
  let lowercase_new_user = new_user.toLowerCase();
  let lowercase_current_users = current_users.map((user) => user.toLowerCase());
  if (lowercase_current_users.includes(lowercase_new_user)) {
    console.log(
      `Sorry, the username '${new_user}' is already taken. Please enter a new username.`
    );
  } else {
    console.log(`Congratulations! The username '${new_user}' is available.`);
  }
}

// Question #27
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
  if (number === 1) {
    console.log(`${number}st`);
  } else if (number === 2) {
    console.log(`${number}nd`);
  } else if (number === 3) {
    console.log(`${number}rd`);
  } else {
    console.log(`${number}th`);
  }
}

// Question #28

let pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

for (let pizza of pizzas) {
  console.log(pizza);
}

for (let pizza of pizzas) {
  console.log(`I like ${pizza} pizza.`);
}

console.log(
  "Pizza is one of my favorite foods. I enjoy it with various toppings and flavors."
);

// Question #29

let animals: string[] = ["Dog", "Cat", "Rabbit"];

for (let animal of animals) {
  console.log(animal);
}

for (let animal of animals) {
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

// Question #30
function make_shirt(size: string, message: string): void {
  console.log(`Size: ${size}, Message: "${message}"`);
}

make_shirt("Medium", "Ayan T-Shirts");

// Question #31

function make_shirt2(
  size: string = "Large",
  message: string = "I love TypeScript"
): void {
  console.log(`Size: ${size}, Message: "${message}"`);
}

make_shirt2();

make_shirt2("Medium");

make_shirt2("Small", "Chota Bhai T-shirt");

// Question #32
function describe_city(city: string, country: string = "Unknown"): void {
  console.log(`${city} is in ${country}.`);
}

describe_city("Karachi", "Pakistan");
describe_city("Tokyo", "Japan");
describe_city("New York");

// Question #33
function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("New York", "United States"));

// Question #34
function make_album(
  artist: string,
  title: string,
  tracks?: number
): { artist: string; title: string; tracks?: number } {
  let album: { artist: string; title: string; tracks?: number } = {
    artist,
    title,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}

console.log(make_album("Linkin Park", "Meteora"));
console.log(make_album("Ed Sheeran", "÷", 16));
console.log(make_album("Taylor Swift", "1989"));

// Question #35
// Define the show_magicians function that takes an array of magician names
function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

let magicians: string[] = [
  "David Copperfield",
  "Harry Houdini",
  "Penn Jillette",
  "Teller",
];

show_magicians(magicians);

// Question #36
function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];
  for (let magician of magicians) {
    great_magicians.push(`${magician} the Great`);
  }
  return great_magicians;
}
let great_magicians: string[] = make_great(magicians);
show_magicians(great_magicians);
// Question #37
function make_great2(magicians: string[]): string[] {
  let great_magicians: string[] = [];
  for (let magician of magicians) {
    great_magicians.push(`${magician} the Great`);
  }
  return great_magicians;
}

let magicians2: string[] = [
  "David Copperfield",
  "Harry Houdini",
  "Penn Jillette",
  "Teller",
];

let great_magicians2: string[] = make_great2([...magicians2]);

console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(great_magicians2);

// Question #38
function make_sandwich(...items: string[]): void {
  console.log("Sandwich order:");
  for (let item of items) {
    console.log("- " + item);
  }
  console.log("Enjoy your sandwich!");
}

make_sandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
make_sandwich("Ham", "Cheese");
make_sandwich("Peanut Butter", "Jelly");

// Question #39
function store_car_info(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
  let carInfo: { manufacturer: string, model: string, [key: string]: any } = { manufacturer, model };

  for (let extra of extras) {
      Object.assign(carInfo, extra);
  }

  return carInfo;
}

let cars = store_car_info("Toyota", "Corolla", { color: "Blue" }, { year: 2022 });
console.log(cars);

                        ////////////////////    //////////              //////       ///////////////                 
                        ////////////////////    ///////////             //////       //////      //////             
                        //////                  ////// /////            //////       //////         /////          
                        //////                  ////// /////            //////       //////            /////   
                        //////                  //////  /////           //////       //////              ////
                        ////////////////////    //////   //////         //////       //////              /////
                        ////////////////////    //////     //////       //////       //////              /////   
                        //////                  //////      //////      //////       //////              /////    
                        //////                  //////       //////     //////       //////             /////       
                        //////                  //////         ///////  //////       //////           /////        
                        ////////////////////    //////             ///////////       //////        //////         
                        ////////////////////    //////             ///////////       /////////////////                 
