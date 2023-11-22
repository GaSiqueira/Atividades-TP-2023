export default class Produto {
    public nome!: string
    public descricao !: string
    public valor !: number
    constructor(nome:string, descricao:string, valor:number){
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
}