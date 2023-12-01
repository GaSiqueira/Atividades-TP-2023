import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Deletar from "./deletar";

export default class DeletarServico extends Deletar{
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada
    }
    public deletar(){
        let servicoNome = this.entrada.receberTexto(`Nome do serviço que deseja deletar: `)
        const index = this.servicos.findIndex(servico => servico.nome === servicoNome)
        if (index!== -1){
            this.servicos.splice(index, 1)
            console.log(`O serviço do nome digitado foi excluído!`)
        }
        else{
            console.log(`O nome do serviço não foi encontrado`)
        }
    }
}