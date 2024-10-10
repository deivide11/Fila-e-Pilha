// Sintaxe para a criação de Classe
export default class Fila {

    //Cria um array de itens
    constructor() {

        this.itens = [];

    }

        adicionar(elemento) {

            // A) Ok!
            if (elemento != null || elemento != "") {

                this.itens[this.itens.length] = elemento;

            } else {

                console.log("O item não foi adicionado a Fila.");

            }
            
        }


        ver() { 

            if (this.itens.length == 0 || this.itens == undefined) {

                console.log("-> Sem elementos na fila");

            } else {

                return this.itens[0];

            }
        }
    
        // B)
        remover() {
        
            //Verificando se a Fila está vazia!
            if (this.itens.length == 0) {

                console.log("Fila está vazia");

            } else {
                
                // let item ARMAZENA o primeiro elemento da Fila.
                let item = this.itens[0];

                for (var i = 0; i < this.itens.length; i++) {

                    // Passando os ELEMENTOS para os ídices à esquerda.
                    this.itens[i] = this.itens[i+1];

                    // Final do Fila.
                    if (this.itens[i] == undefined) {

                        //Redefinindo o tamanho da Fila.
                        this.itens.length = this.itens.length-1;

                        break;
                    }

                }

                return item;

            }

        }


        verificaFilaEstaVazia() {
       
            return this.itens.length == 0;
            
        }


        tamanho(){
            return this.itens.length;
        }

        //B)
        limpar() {

            if (this.itens.length == 0) {

                console.log("Fila já está vazia");

            } else {
                
                this.itens = [];

            }

        }

    //Função obrigatória de toda classe
    tostring(){

        // Transforma o array em um texto único
        // Geralmente só sobrecarregamos quando queremos pernsolaizar o retorno.
        //return this.itens.this.toString();
        let texto = "";
        texto = ` ==== ELEMENTOS NA FILA ====\n`;
        for (var i = 0; i<this.itens.length; i++){
            texto += ` [${i+1}º ] => ${this.itens[i]}\n`;
        }
        texto += ` ==== ================= ====\n`;
        return texto;

    }

        
}   


