import Listagem from "../Listar/listagem";
import Produto from "../../modelo/produto";

export default class ProdutosMaisConsumidos extends Listagem{
    private produtos: Array<Produto>
    constructor(produtos:Array<Produto>){
        super()
        this.produtos = produtos
    } 
    public listar(): void {
        const prodOrd = this.produtos.sort((a, b)=> b.getQuantidadeVendas - a.getQuantidadeVendas)
        console.log(`Produtos mais vendidos: `)

        for(let x = 0; x<Math.min(5, prodOrd.length);x++){
            const produto = prodOrd[x]
            console.log(`Nome: ` + produto.nome)
            console.log(`Descrição: ` + produto.descricao)
            console.log(`Quantidade vendida: ` +produto.getQuantidadeVendas)
            console.log(`Valor total de vendas: R$ ${produto.getvalorVendas.toFixed(2)}` )
        }
    }
}