class MathObj{
    executeMath(){
    // Math Object
    // It provides properties and methods for performing mathematical operations.

    // Math Object has no constructor, is static
    // All methods and properties can be used without creating a Math object first
    // The syntax for Math any methods is : Math.method(number)
    console.log(Math); // View methods in the browser

    // Math.abs( number )
    // Returns the absolute value of a number.
    console.log(Math.abs(-5)); // 5

    // Math.sign( number )
    // Returns the sign of a number, indicating whether the number is positive, negative or zero.
    console.log(Math.sign(-5)); // -1
    console.log(Math.sign(0)); // 0
    console.log(Math.sign(5)); // 1


    // Math.min( number1, number2, ... )
    // Returns the number with the lowest value.
    console.log(Math.min(1, 3, 2, 64, 712, -122)); // -122

    // Math.max( number1, number2, ... )
    // Returns the number with the highest value.
    console.log(Math.max(1, 3, 2, 64, 712, -122)); // 712

    // Math.round( number )
    // Returns the value of a number rounded to the nearest integer.
    console.log(Math.round(7.2)); // 7
    console.log(Math.round(7.7)); // 8

    // Math.floor( number )
    // Returns the value of a number rounded downwards to the nearest integer.
    console.log(Math.floor(7.7)); // 7

    // Math.ceil( number )
    // Returns the value of a number rounded upwards to the nearest integer.
    console.log(Math.ceil(7.2)); // 8

    // Math.pow( base, exponent )
    // Returns the value of a base number raised to the power of an exponent.
    const pow = Math.pow(4, 3);
    console.log(pow); // 64

    // Math.sqrt( number )
    // Returns the square root of a number.
    console.log(Math.sqrt(64)); // 8

    // Math.random()
    // Returns a random number between 0 (inclusive), and 1 (exclusive)
    // It uses an initial internal value that is usually based on the current system time, generating pseudorandom numbers.
    console.log(Math.random());

    console.log(Math.random() * 10); // Random number between 0 and 10
    console.log(Math.floor(Math.random() * 1000)); // Random number between 0 and 10

    // Constants
    Math.E        // returns Euler's number
    Math.PI       // returns PI
    Math.SQRT2    // returns the square root of 2
    Math.SQRT1_2  // returns the square root of 1/2
    Math.LN2      // returns the natural logarithm of 2
    Math.LN10     // returns the natural logarithm of 10
    Math.LOG2E    // returns base 2 logarithm of E
    Math.LOG10E   // returns base 10 logarithm of E
    console.log(Math.PI);
    }
}

export default MathObj;