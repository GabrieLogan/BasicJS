// Criar um array de números
let numeros = [1, 2, 3, 4, 5];

// Acessar elementos do array
console.log(numeros[0]);  // Saída: 1
console.log(numeros[2]);  // Saída: 3

// Modificar um elemento do array
numeros[1] = 10;
console.log(numeros);  // Saída: [1, 10, 3, 4, 5]

// Propriedades do array
console.log(numeros.length);  // Saída: 5

// Percorrer o array usando um loop
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// Adicionar elementos ao array
numeros.push(6);
numeros.push(7);
console.log(numeros);  // Saída: [1, 10, 3, 4, 5, 6, 7]

// Remover o último elemento do array
numeros.pop();
console.log(numeros);  // Saída: [1, 10, 3, 4, 5, 6]
