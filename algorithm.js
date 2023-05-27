// Algoritmo: Verificar se um número é par ou ímpar

// Função para verificar se um número é par ou ímpar
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
      return "O número é par";
    } else {
      return "O número é ímpar";
    }
  }
  
  // Teste da função
  let numero = 7;
  let resultado = verificarParOuImpar(numero);
  console.log(resultado);  // Saída: O número é ímpar
  