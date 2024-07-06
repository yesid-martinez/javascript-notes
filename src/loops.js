// Loops -> Iterations

// Require iterable element

// Loop Structure
// 1. Initialization
// 2. Boolean Expression Evaluation
// 3. Instructions to be executed
// 4.Breaking instructions

class Loop {

    executeLoop() {
        // while => while ( condition ) { instruction }
        let counter = 0;

        while(counter < 5){
            console.log(`The value of the counter is ${counter}`)
            counter++;
        }
        console.log("End of while");
        counter = 0;

        // do while => Run instruction once -> Verify Boolean expression...
        // do { instruction } while ( condition )
        do {
            console.log(`The value of the counter is ${counter}`);
            counter ++
        } while (counter <= 5);
        console.log("End of do while");
        counter = 0;


        // traditional for => for ( counter; condition; increment ) { instruction } 
        let array = [1,2,3,4,5];

        for (let counter = 0; counter < array.length; counter++) {
            const element = array[counter];
            console.log(element);
        }
        console.log("End of for");
        counter = 0;

        // while + if else loops 
        while(counter <= 100){
            if(counter % 2 === 0){
                console.log(`The number ${counter} is even`);
            }else{
                console.log(`The number ${counter} is odd`);
            }
            counter++;
        }

        counter = 0;
        let accumulator = 0;
        while (counter < 5) {
        console.log(`Qurrent value: ${counter}`);
        accumulator += counter;
        counter++;
        }
        console.log(`The value of the sum is ${accumulator}`);
    };
}

// Export the class
export default Loop;