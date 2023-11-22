import Produto from "../../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem{
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os pets:`);
        this.produtos.forEach(produto => {
            console.log(`Nome: ` + produto.getNome);
            console.log(`Raça: ` + produto.getDescricao);
            console.log(`Valor: ` + produto.getValor);
                        console.log(`--------------------------------------`);
        });
        console.log(`\n`);    
    }
}