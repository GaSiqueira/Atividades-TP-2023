import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Deletar from "./deletar";

export default class DeletarProduto extends Deletar{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    }
    public deletar(){
        let produtoNome = this.entrada.receberTexto(`Nome do produto que deseja deletar: `)
        const index = this.produtos.findIndex(produto => produto.nome === produtoNome)
        if (index!== -1){
            this.produtos.splice(index, 1)
            console.log(`Produto do nome digitado foi excluído!`)
        }
        else{
            console.log(`O nome do produto não foi encontrado`)
        }
    }
}