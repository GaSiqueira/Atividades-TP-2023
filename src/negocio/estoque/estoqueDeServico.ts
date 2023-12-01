import Cadastro from "../Cadastrar/cadastro"
import Servico from "../../modelo/servico"

export default class EstoqueDeServicos extends Cadastro {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
    }
    public cadastrar(): void {
        let nome = 'Banho cachorro médio';
        let descricao = 'Banho de cachorro médio'
        let valor = 100.00
        let produto = new Servico(nome,descricao, valor, 0);
        this.servicos.push(produto);
        
        nome = 'Banho e tosa cachorro pequeno';
        descricao = 'Banho e tosa de cachorros pequenos, perfume não incluso para nanicos!'
        valor = 70.99
        produto = new Servico(nome,descricao, valor, 0);
        this.servicos.push(produto);

        nome = 'Banho e tosa para pinscher';
        descricao = 'banho e tosa para pinscher, esses cachorros são o capeta em pessoa!'
        valor = 150.00
        produto = new Servico(nome,descricao, valor, 0);
        this.servicos.push(produto);

        nome = 'Banho e tosa higiênica';
        descricao = 'Para todos os tipos!'
        valor = 215.60
        produto = new Servico(nome,descricao, valor, 0);
        this.servicos.push(produto);
    }
}