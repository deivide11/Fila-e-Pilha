export default class Pilhas {

    constructor(){

        this.itens = [];

    }

    adicionar(elemento) {

        if (elemento != null || elemento != "") {

            this.itens[this.itens.length] = elemento;

        } else {

            console.log("O item não foi adicionado a Pilha|.");

        }

    }
    

    remover() {

        /*
            Obtém o último elemento: let item = this.itens[this.itens.length - 1];
            Isso captura o último elemento do array itens (aquele no índice length - 1).
            
            Remove o último elemento: this.itens.length = this.itens.length - 1;
            Isso efetivamente reduz o comprimento do array em 1, removendo o último elemento.
            
            Retorna o elemento removido: return item;
            Isso retorna o elemento que foi removido do array
        */
        
        if (this.itens.length == 0) {

            console.log("Empty list");

          } else {

            let item = this.itens[this.itens.length - 1];

            this.itens.length = this.itens.length - 1;

            return item;
        }
        
    }

    ver() {

        if (this.itens.length == 0 || this.itens == undefined) {

            console.log("-> Sem elementos na pilha");

        } else {

            return this.itens[this.itens.length-1];
        
        }

    }

    estaVazio() {
        
        return this.itens === 0;

    }

    tamanho() {

        return this.itens = [this.itens.length];
    }

    limpar() {

        if (this.itens.length == 0 ) {

            console.log("Pila já está vazia");

        } else {
            
            this.itens = [];

        }

    }

    tostring(){
        /*
            O comando debugger é usado para acionar o depurador do JavaScript. Quando o código é executado em um ambiente que suporte depuração (como um navegador ou uma IDE), a execução do script será pausada aqui, permitindo que o desenvolvedor examine o estado do programa.

            A variável texto é inicializada como uma string vazia. Em seguida, é adicionada uma linha que serve como cabeçalho para a representação textual da pilha.

            A variável texto é inicializada como uma string vazia. Em seguida, é adicionada uma linha que serve como cabeçalho para a representação textual da pilha.

            Uma linha é adicionada ao final de texto para marcar o fim da representação da pilha.

            O método retorna a string texto, que agora contém uma representação textual completa dos elementos da pilha.
        */

        let texto = "";
        texto = ` ==== ELEMENTOS NA PILHA ====\n`;
        for (var i = (this.itens.length -1); i >= 0; i--) {

            texto += `[ ${i+1}º ] => ${this.itens[i]}\n`;
            return texto;
        }
        
    }

}