import readline from 'readline';

import Loop from './loops.js';
import Conditionals from './conditionals.js';
import MathObj from './objects/mathObj.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const executeMethod = (method) => {
    switch (method) {
        case 'loop':
        const loopInstance = new Loop();
        loopInstance.executeLoop();
        break;
        case 'conditionals':
        const conditionalsInstance = new Conditionals();
        conditionalsInstance.executeConditionals();
        break;
        case 'math':
        const mathObjInstance = new MathObj();
        mathObjInstance.executeMath();
        break;
        default:
        console.log('Invalid option.');
        break;
    }
};

rl.question('Choose which method to run ("loop", "conditionals", "math"):', (answer) => {
    executeMethod(answer.trim().toLowerCase());

    rl.close();
});