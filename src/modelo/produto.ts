export default class Produto {
    public nome!: string
    public descricao !: string
    public valor !: number
    public quantidadeVendas!: number
    public valorVendas!: number
    constructor(nome:string, descricao:string, valor:number, quantidadeVendas: number, valorVendas: number){
        this.nome = nome
        this.descricao = descricao
        this.valor = valor
        this.quantidadeVendas = quantidadeVendas
        this.valorVendas = valorVendas
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
    public get getvalorVendas(): number {
        return this.valorVendas
    }
    
    public get getQuantidadeVendas(): number{
        return this.quantidadeVendas
    }
    public adicionarVenda(quantidade: number): void {
        this.quantidadeVendas += quantidade;
        this.valorVendas = this.valorVendas + quantidade * this.valor;
    }
}