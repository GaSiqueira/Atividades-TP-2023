export default class Servico {
    public nome!: string;
    public descricao !: string
    public valor !: number
    public servicosPrestados!: number
    public valorVendas!:number
    constructor(nome: string, descricao: string, valor:number, valorVendas:number){
        this.nome = nome
        this.descricao = descricao
        this.valor = valor
    }
    public get getNome(){
        return this.nome
    }
    public get getDescricao(){
        return this.descricao
    }
    public get getValor(){
        return this.valor
    }
    public get getservicosPrestados(): number{
        return this.servicosPrestados
    }
    public get getvalorVendas(): number {
        return this.valorVendas
    }
    public adicionarVenda(): void {
        this.servicosPrestados += 1;
        this.valorVendas = this.valorVendas + this.valor;
    }
}