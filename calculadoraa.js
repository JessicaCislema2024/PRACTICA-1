const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== CALCULADORA SIMPLE ===");
console.log("1. Sumar");
console.log("2. Restar");
console.log("3. Multiplicar");
console.log("4. Dividir");

rl.question("Elige una opción (1-4): ", function(opcion) {
  rl.question("Ingresa el primer número: ", function(n1) {
    rl.question("Ingresa el segundo número: ", function(n2) {
      let a = parseFloat(n1);
      let b = parseFloat(n2);

      if (opcion == "1") {
        console.log("Resultado: " + (a + b));
      } else if (opcion == "2") {
        console.log("Resultado: " + (a - b));
      } else if (opcion == "3") {
        console.log("Resultado: " + (a * b));
      } else if (opcion == "4") {
        if (b != 0) {
          console.log("Resultado: " + (a / b));
        } else {
          console.log("No se puede dividir por cero.");
        }
      } else {
        console.log("Opción no válida.");
      }

      rl.close();
    });
  });
});
