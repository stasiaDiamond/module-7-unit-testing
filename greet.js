// * leaving iterations to see how the function develops when given extra steps
// * note: requested string format changes with each new Step instruction

// Step 1: Write a function called Greet(name) that takes an argument called name, and returns a simple greeting message. For example, if the name is “Elizabeth” the function should return “Hello, Elizabeth”.


// function greet(name) {
//   return `Hello, ${name}`;
// }

// Step 2: handle null values by introducing a default. For example, when the name parameter is null, then the method should return the string “Hello there!”.

// function greet(name) {
//   // * || = OR
//   const givenName = name || "there!";
//   return `Hello, ${givenName}`;
// }

// Step 3: add shouting. When “name” is all uppercase, then the method should shout back to the user. For example, when the name is "JOSE" then the method should return the string "HELLO JOSE!".

// function greet(name) {
//   const givenName = name || "there!";
//   // * converts the string givenName to all caps
//   const addsShouting = givenName === givenName.toUpperCase();

//   if (addsShouting) {
//     // *if addsShouting was true
//     return `HELLO ${givenName}!`
//   } else {
//     // * doesn't addsShouting to make uppercase
//     return `Hello, ${givenName}`;
//   }
// }

// Step 4: Handle two names as input. If the name parameter is an array containing two names, then both names should be greeted. For example, if the input parameter is [‘Jose’,’Pep’], the method should return the string: “Hello, Jose, Pep”. 

// Step 5: Handle an arbitrary number of names as input. If the name parameter is an array of multiple names, all names must be greeted. For example, if the input parameter is [‘Alex’,’Arsene’,’Jose’,’Zidane’], the method should return the string: “Hello, Alex, Arsene, Jose, Zidane”

// * steps 4 and 5 are basically the same thing. The output isn't different, they're still just commas. 
// * if 2 names were greeted as "Hello Jose and Pep" instead of as written: "Hello, Jose, Pep" I would write an 2 separate functions, but they aren't so I'm not.

function greet(name) {
  // * i love Array.isArray!
  if (Array.isArray(name)) {
    // * template literal fun
    // * creates a string by joining the elements in the array
    // * will separate them with a comma then space
    return `Hello, ${name.join(", ")}`
  }
  // * use same from above
  const givenName = name || "there!";
  // * .toUpperCase() used on givenName results in ALL CAPS
  const addsShouting = givenName === givenName.toUpperCase();

  if (addsShouting) {
    return `HELLO ${givenName}!`
  } else {
    return `Hello, ${givenName}`;
  }
}

// * module export the greet function so it can be used elsewhere
// * it's just greet and not greet() because we're exporting the function itself and not worried about the result of calling () the function 
module.exports = greet;


// * future dev: add a Step 6 where names must be capitalized
