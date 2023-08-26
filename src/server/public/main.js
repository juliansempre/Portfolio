console.log("script da view funcionando");
document.title = "Portfolio";

// Função para exibir todos os dados no console do navegador
const exibirDados = (data) => {
  console.log(data);
};

// Função para exibir o nome do id igual a 2 em um alerta
const exibirNome = (data) => {
  // Filtrar os dados para encontrar o objeto com id igual a 2
  const resultado = data.find((item) => item.id === 1);

  if (resultado) {
    console.log("Nome do id 2:", resultado.nome);
    document.querySelector(".nome").innerHTML = resultado.nome;
  } else {
    console.log("Nenhum resultado encontrado para o id 2.");
  }
};

// Chamada da função para enviar uma solicitação ao servidor Node.js
document.addEventListener('DOMContentLoaded', () => {
  fetch('/buscar') // Faz uma solicitação GET ao servidor para a rota '/buscar'
      .then((response) => response.json()) // Converte a resposta para JSON
      .then((data) => {
        exibirDados(data); // Exibe todos os dados no console do navegador
        exibirNome(data); // Exibe o nome do id igual a 2 em um alerta
      })
      .catch((error) => console.error('Erro:', error));
});
