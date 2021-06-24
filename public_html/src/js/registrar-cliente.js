// Client submit 

document.querySelector("#clients-form").addEventListener('submit', () => {
  
  let cliente = {
    nome: document.querySelector("#nomeCliente").value,
    cpf: document.querySelector("#cpf").value,
    idade: parseInt(document.querySelector("#idade").value),
    classe: document.querySelector("#classeCliente").value
  };
  
let jsonCliente = JSON.stringify(cliente);
  
  alert(jsonCliente);
  
});