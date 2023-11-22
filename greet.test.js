// * must name the file ".test.js" for nox jest to find it
// * must run npx jest from root 
// * they didn't teach us this but: must require() in order to use/pull in the greet file
// * they didn't teach us this but: typing ./ will bring up a list of what's available
const greet = require('./greet')

// * test() is native to jest and available to us bc we ran npm install jest as a dev dependency
// * it takes 2 arguments: 
// * 1. the test's functionality as a string and
// * 2. the function itself that's doing the testing
test("greets one name, no shouting", function () {
  // * calling greet() with "Nala" and saving it in testResult variable
  const testResult = greet("Nala");
  // * expect() native to jest
  // * toBe() is a "matcher" native to jest and is attached to whatever testResult is
  // * it checks if testResult === "Hello, Nala"
  // * this entire line is called an assertion in jest
  expect(testResult).toBe("Hello, Nala")
})

test("SHOUT ONE NAME", function () {
  const testResult = greet("SIMBA");
  expect(testResult).toBe("HELLO SIMBA!")
})

test("greets null", function () {
  const testResult = greet(null);
  expect(testResult).toBe("Hello, there!")
})

test("greets array", function () {
  const testResult = greet(["Timón", "Pumba", "Rafiki", "Zazu"]);
  expect(testResult).toBe("Hello, Timón, Pumba, Rafiki, Zazu")
})

