import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`Inicio de cadastro de produto`)
        let nome = this.entrada.receberTexto(`Informe o nome do produto: `)
        let descricao = this.entrada.receberTexto(`Informe a descrição do produto: `)
        let valor = this.entrada.receberNumero(`Informe o valor do produto: `)
    }
}