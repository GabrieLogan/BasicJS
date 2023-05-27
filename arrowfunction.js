// Função tradicional
function saudacao(nome) {
    return "Olá, " + nome + "!";
  }
  
  // Arrow Function equivalente
  let saudacaoArrow = (nome) => {
    return "Olá, " + nome + "!";
  };
  
  // Exibindo o resultado no console
  console.log(saudacao("João"));             // Saída: Olá, João!
  console.log(saudacaoArrow("Maria"));       // Saída: Olá, Maria!
  