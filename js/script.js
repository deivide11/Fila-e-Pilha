// Importa a classe para que ela possa ser utilizada/instanciada

import Filas from "../classes/Fila.js";
import Pilhas from "../classes/Pilha.js";

console.log("------------------------Atividade--------------------------");

let fila = new Filas();
let pilha = new Pilhas();

console.log("Tamanho inicial da Fila: " + fila.tamanho());
console.log("Tamanho inicial da Pilha: " + pilha.tamanho());

console.log("---------------------------------------------------------------");

console.log("Adicionando produtos de limpeza na pilha...");
pilha.adicionar({ nome: "Detergente", valor: 5.99 });
pilha.adicionar({ nome: "Desinfetante", valor: 8.50 });
pilha.adicionar({ nome: "Sabão em pó", valor: 12.75 });
pilha.adicionar({ nome: "Esponja", valor: 2.25 });
pilha.adicionar({ nome: "Água sanitária", valor: 6.00 });
pilha.adicionar({ nome: "Pano de limpeza", valor: 4.80 });
console.log("Quantidade de itens na pilha: ", pilha.tamanho());
console.log("Os produtos de limpeza na pilha são:");
console.log(pilha.tostring());

console.log("---------------------------------------------------------------");

console.log("Adicionando pessoas na fila...");
for (var i = 0; i < 7; i++) {
  var cliente = prompt("Digite o nome do cliente que vai para a fila");
  fila.adicionar(cliente);
}

console.log("Quantidade de pessoas na fila: ", fila.tamanho());
console.log("As pessoas na fila são:");
console.log(fila.tostring());

console.log("---------------------------------------------------------------");

console.log("Atendimento na Loja");
console.log("A primeira pessoa foi embora:", fila.remover());

var total = 0;
var quantidade = pilha.tamanho() + 1;
var tamanho = fila.tamanho();

console.log("---------------------------------------------------------------");

for (var i = 0; i < tamanho; i++) {

  if (pilha.tamanho() > 0) {

    total = total + pilha.ver().valor;
    console.log(`A ${fila.remover()} comprou e foi embora!`);
    console.log(`O produto ${pilha.remover().nome}, saiu do estoque`);
    console.log(`Restam ${fila.tamanho()} pessoas para serem atendidas e ${pilha.tamanho()} produtos disponíveis no estoque`);

  } else {

    console.log("Não tem mais produtos.");
    console.log(`${fila.remover()} foi embora sem produto`);
    break;
    
  }
}

console.log("------------------------------------------------------------------");

console.log(`O total da receita dos produtos vendidos é de: R$ ${total.toFixed(2)}`);
console.log(`A média de preço dos produtos vendidos é de: R$ ${(total / quantidade).toFixed(2)}`);
console.log(`O total de produtos vendidos é de: ${quantidade}`);
