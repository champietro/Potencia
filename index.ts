/*Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.
*/

let btnEnv = document.getElementById("btnEnviar");
let base = document.getElementById("base");
let exponente = document.getElementById("exponente");

btnEnv.addEventListener("click", () => {
  // let b: number = Number(base.value);
  //  let e: number = Number(exponente.value);
  let b = prompt("Base");
  let e = prompt("Potencia");

  function calcularPotencia(b, e) {
    let resultado: number = b;
    for (let i = 1; i < e; i++) {
      resultado = resultado * b;
    }
    if ((resultado = 0)) {
      resultado = 1;
    }
    console.log(resultado);
  }

  while (e < 0) {
    b = prompt("Base");
    e = prompt("Potencia");
  }
  calcularPotencia(b, e);
});
