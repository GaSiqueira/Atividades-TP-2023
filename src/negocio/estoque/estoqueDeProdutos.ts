import Cadastro from "../Cadastrar/cadastro"
import Produto from "../../modelo/produto"

export default class EstoqueDeProdutos extends Cadastro {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }
    public cadastrar(): void {
        let nome = 'Shampoo anti-carrapatos';
        let descricao = ''
        let valor = 29.99
        let produto = new Produto(nome,descricao, valor, 0, 0);
        this.produtos.push(produto);

        nome = 'Escova de pelo';
        descricao = 'Escova para alinhar os pelos do seu pet'
        valor = 50.00
        produto = new Produto(nome,descricao, valor, 0, 0);
        this.produtos.push(produto);

        nome = 'Sabonete anti-carrapatos';
        descricao = 'Sabonete contra carrapatos'
        valor = 25.60
        produto = new Produto(nome,descricao, valor, 0, 0);
        this.produtos.push(produto);

        nome = 'Perfume de chocolate';
        descricao = 'Perfume com o cheirinho de chocolate'
        valor = 40.00
        produto = new Produto(nome,descricao, valor, 0, 0);
        this.produtos.push(produto);

        
        nome = 'Coleira';
        descricao = 'Coleira para passear com seu pet'
        valor = 60.00
        produto = new Produto(nome,descricao, valor, 0, 0);
        this.produtos.push(produto);
    }
}