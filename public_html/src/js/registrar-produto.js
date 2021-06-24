// Product submit

document.querySelector("#products-form").addEventListener('submit', () => {
  
let produto = {
  nome: document.querySelector("#nomeProduto").value,
  preco: "R$" + parseFloat(document.querySelector("#preco").value).toFixed(2),
  categoria: document.querySelector("#categoria").value,
  quantidade: parseInt(document.querySelector("#quantidade").value)
};

let jsonProduto = JSON.stringify(produto);

envia(jsonProduto, "produto");
  
});