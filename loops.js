// Ciclos de repetición

// Ciclos de recorrido -> Requieren elemento iterable

// - ESTRUCTURA DEL CICLO
// 1. Inicialización
// 2. Evaluación de expresión booleana
// 3. Instrucciones a ejecutar
// 4.Instrucciones de rompimineto

// Si la expresión booleana nunca es false -> loop

class Loop {

    executeLoop() {
        // while => while ( condición ) { instrucción }
        let contador = 0;

        while(contador < 5){
            console.log(`El valor del contador es ${contador}`)
            contador++;
        }
        console.log("Fin del while");
        contador = 0;

        // do while => Ejecuta instrucción una vez -> Verifica expresión boolena...
        // do { instrucción } while ( condición )
        do {
            console.log(`El valor de contador es ${contador}`);
            contador ++
        } while (contador <= 5);
        console.log("Fin del do while");
        contador = 0;


        // for tradicional => for ( contador; condición; incremento ) { instrucción } 
        let array = [1,2,3,4,5];

        for (let contador = 0; contador < array.length; contador++) {
            const element = array[contador];
            console.log(element);
        }
        console.log("Fin del for");
        contador = 0;

        // ciclo while + if else 
        while(contador <= 100){
            if(contador % 2 === 0){
                console.log(`El número ${contador} es par`);
            }else{
                console.log(`Él número ${contador} es impar`);
            }
            contador++;
        }

        let contador5 = 0;
        let acumulador = 0;
        while (contador5 < 5) {
        console.log(`sumando ${contador5}`);
        acumulador += contador5;
        contador5++;
        }
        console.log(`El valor de la sumatoria es ${acumulador}`);
    };
}

// Export the class
export default Loop;