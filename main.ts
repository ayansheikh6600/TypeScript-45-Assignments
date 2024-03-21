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





// Question #5
// Question #5
// Question #5
// Question #5
// Question #5
// Question #5
// Question #5
// Question #5
// Question #5
// Question #5
// Question #5
// Question #5
// Question #5
// Question #5
// Question #5
// Question #5
// Question #5
