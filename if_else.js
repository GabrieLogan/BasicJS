// Função que verifica se um número é positivo, negativo ou zero
function verificarNumero(numero) {
  if (numero > 0) {
    return "O número é positivo.";
  } else if (numero < 0) {
    return "O número é negativo.";
  } else {
    return "O número é zero.";
  }
}

// Teste da função
console.log(verificarNumero(5));    // Saída: O número é positivo.
console.log(verificarNumero(-2));   // Saída: O número é negativo.
console.log(verificarNumero(0));    // Saída: O número é zero.
