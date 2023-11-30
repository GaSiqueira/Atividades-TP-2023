import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Editar from "./editar";

export default class editarServico extends Editar{
    private servico: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>){
        super()
        this.servico = servico
        this. entrada = new Entrada();
    }
    public editar(): void{
        console.log(`Lista de Serviços`)
        this.servico.forEach(x =>{
            console.log(`Serviço: ${x.nome}`)
        })
        let entrada = this.entrada.receberTexto(`Digite qual o nome do serviço que deseja editar: `)
        let todosProdutos = this.servico.map(y => y.nome)
        let indexProdutos = todosProdutos.indexOf(entrada)
        if (indexProdutos == -1){
            console.log('Serviço não encontrado!')
        }
        else{
            let novoNome = this.entrada.receberTexto(`Digite o novo nome: `)
            let novoDesc = this.entrada.receberTexto(`Digite a nova descrição: `)
            let novoPreco = this.entrada.receberTexto(`Digite o novo preço: `)
            this.servico.filter(servico => servico.nome == entrada).map(x => x.nome == novoNome).toString()
            this.servico.filter(servico => servico.nome == entrada).map(x => x.nome == novoDesc).toString()
            this.servico.filter(servico => servico.nome == entrada).map(x => x.nome == novoPreco).toString()
            console.log(`Servico foi alterado com sucesso!`)
        }
    }
}