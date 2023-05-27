// Criar um objeto de pessoa
let pessoa = {
    nome: "João",
    idade: 25,
    profissao: "Desenvolvedor",
    saudacao: function() {
      console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    }
  };
  
  // Acessar propriedades do objeto
  console.log(pessoa.nome);  // Saída: João
  console.log(pessoa.idade);  // Saída: 25
  
  // Chamar um método do objeto
  pessoa.saudacao();  // Saída: Olá, meu nome é João e tenho 25 anos.
  
  // Modificar uma propriedade do objeto
  pessoa.profissao = "Engenheiro";
  console.log(pessoa.profissao);  // Saída: Engenheiro
  