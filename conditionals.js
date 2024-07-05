class Conditionals{
  executeConditionals(){
    let x = 3;

    // if (condition(true)) { instruction }
    if (x === 5) {
        // console.log("x is equal to 5"); // False -> Ignores the instruction
    }

    // if (condition(true)) { instruction } else { instruction -> condition false }
    if (x === 3) {
        // console.log("x is equal to 3"); // true -> Executes the instruction
    } else {
        // console.log("x is different from 3"); // false -> Ignores the instruction
    }

    // if - else - if
    if (x === 1) {
        // console.log("x is 1");
    } else if (x === 2) {
        // console.log("x is 2");
    } else if (x === 3) {
        // console.log("x is 3");
    }

    // Classic if - else
    let firstElement = 4;
    let secondElement = 0;

    if (firstElement === 9) {
      secondElement = 8;
    } else {
      secondElement = 5;
    }
    // Ternary expression => Boolean expression ? true : false
    secondElement = firstElement === 9 ? 8 : 5;
    // console.log(`Final value of r = ${r}`);

    let message = firstElement % 2 === 0 ? "is even" : "is odd";
    // console.log(`${a} ${message}`);

    // Switch => More concise and readable alternative to using multiple nested if-else statements.
    // switch (expression) {
    //   case value1:
    //     // Instruction to execute if `expression` is equal to `value1`
    //     break;
    //     // break => Exits the switch after executing an instruction

    //   case value2:
    //     // Instruction to execute if `expression` is equal to `value2`
    //     break;
    //   // More cases...
    //   default:
    //     // Code to execute if none of the previous cases are met
    // };

    // Definition of constants
    const MONDAY = 1;
    const TUESDAY = 2;
    const WEDNESDAY = 3;
    const THURSDAY = 4;
    const day = TUESDAY;

    switch (day) {
      case MONDAY:
        console.log("day is Monday");
        break;
      case TUESDAY:
        console.log("day is Tuesday");
        break;
      case WEDNESDAY:
        console.log("day is Wednesday");
        break;
      case THURSDAY:
        console.log("day is Thursday");
        break;

      default:
        console.log("Not a valid day");
        break;
    }

    // Switch pattern
    let var1 = 8;
    let var2 = 10;

    switch (true) {
      case var1 === 5:
        console.log(`${var1} is greater than 4`);
        break;
      case var1 >= 6 && var1 <= 10:
        console.log(`${var1} is between 6 and 10`);
        break;
      case var2 === 5:
        console.log(`${var2} is 5`);
        break;
      case var2 === 20 || var2 === 10:
        console.log(`${var2} is 20 or 10`);
        break;
      default:
        console.log("None of the conditions were met");
        break;
    }

    // Truthy and Falsy values

    // When something is considered "truthy", it means it is a value that is considered true in a boolean context.
    // In addition to the reserved word "true", the following values are also considered true:
    // any non-zero number, any non-empty string, any non-null object, among others.
    // These values are called "truthy" because, when evaluated in a boolean expression, they are considered true.

    // When something is considered "falsy", it means it is a value that is considered false in a boolean context.
    // In addition to the reserved word "false", the following values are also considered false:
    // zero (0), an empty string (""), null, undefined, among others.
    // These values are called "falsy" because, when evaluated in a boolean expression, they are considered false.


    // Falsy values: These are values that are considered false in a boolean context.
    // The following are falsy values:
    // 0: The number zero
    // "": An empty string
    // false: The boolean false
    // NaN: Not a Number
    // null: The null value
    // undefined: The undefined value

    // Truthy values: These are values that are considered true in a boolean context.
    // All values that are not falsy are truthy. Examples of truthy values include:
    // 1, -1, 100: Any non-zero number
    // "hello", "0", "false": Any non-empty string
    // {}, []: Any non-null object or array

    // Example of a falsy value
    const amount = 0;

    // Traditional if-else
    if (amount > 0) {
      console.log("There is data");
    } else {
      console.log("There is no data");
    }

    // if-else with falsy value => Better readability
    if (amount) {
      console.log("There is data");
    } else {
      console.log("There is no data");
    }
  }
}

export default Conditionals;