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
        let quantidadeVendas = 0
        let valorVendas = 0
        console.log(`Inicio de cadastro de produto`)
        let nome = this.entrada.receberTexto(`Informe o nome do produto: `)
        let registrados = this.produtos.map(x => (x.nome))
        if (registrados.includes(nome)){
            console.log(`o produto já está registrado!`);
            console.log();
        }
        else{
            let descricao = this.entrada.receberTexto(`Informe a descrição do produto: `)
            let valor = this.entrada.receberNumero(`Informe o valor do produto: `)
            let cadastar = new Produto(nome, descricao, valor, quantidadeVendas, valorVendas);
            this.produtos.push(cadastar)
        }
    }
}