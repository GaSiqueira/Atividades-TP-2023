import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Editar from "./editar";

export default class editarProduto extends Editar{
    private produto: Array<Produto>
    private entrada: Entrada
    constructor(produto: Array<Produto>){
        super()
        this.produto = produto
        this. entrada = new Entrada();
    }
    public editar(): void{
        console.log(`Lista de produtos`)
        this.produto.forEach(x =>{
            console.log(`Produto: ${x.nome}`)
        })
        let entrada = this.entrada.receberTexto(`Digite qual o nome do produto que deseja editar: `)
        let todosProdutos = this.produto.map(y => y.nome)
        let indexProdutos = todosProdutos.indexOf(entrada)
        if (indexProdutos == -1){
            console.log('Produto não encontrado!')
        }
        else{
            let novoNome = this.entrada.receberTexto(`Digite o novo nome: `)
            let novoDesc = this.entrada.receberTexto(`Digite a nova descrição: `)
            let novoPreco = this.entrada.receberTexto(`Digite o novo preço: `)
            this.produto.filter(produto => produto.nome == entrada).map(x => x.nome == novoNome).toString()
            this.produto.filter(produto => produto.nome == entrada).map(x => x.nome == novoDesc).toString()
            this.produto.filter(produto => produto.nome == entrada).map(x => x.nome == novoPreco).toString()
            console.log(`Produto foi alterado com sucesso!`)
        }
    }
}