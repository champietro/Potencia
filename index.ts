/*Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando
*/

let btnEnv = document.getElementById("btnEnviar");
let base = document.getElementById("base");
let exponente = document.getElementById("exponente");

btnEnv.addEventListener("click", () => {
  let b: number = Number(base.value);
  let e: number = Number(exponente.value);

  function calcularPotencia(b, e) {
    for (let b = 1; b < e; b++) {
      altura = altura + 2;
    }
  }

  calcularPotencia(b, e);
});
