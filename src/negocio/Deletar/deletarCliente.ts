import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Deletar from "./deletar";

export default class DeletarCliente extends Deletar{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada
    }
    public deletar(){
        let valorCpfCliente = this.entrada.receberTexto(`Qual o número de cpf do cliente a ser deletado? `)
        const index = this.clientes.findIndex(cliente => cliente.getCpf.getValor === valorCpfCliente)
        if(index !== -1){
            this.clientes.splice(index, 1)
            console.log(`O cliente registrado foi excluído!`)
        }
        else{
            console.log(`Cliente com o cpf digitado não foi encontrado!`)
        }
    }
}