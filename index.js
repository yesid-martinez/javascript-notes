import readline from 'readline';

import Loop from './loops.js';
import Conditionals from './conditionals.js';

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
        default:
        console.log('Opción inválida. Elige "loop" o "conditionals".');
        break;
    }
};

rl.question('Elige qué método ejecutar ("loop" o "conditionals"): ', (answer) => {
    executeMethod(answer.trim().toLowerCase());

    rl.close();
});