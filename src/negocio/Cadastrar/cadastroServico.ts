import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro{
    private servicos: Array<Servico>;
    private entrada: Entrada
    constructor(servicos: Array<Servico>){
        super();
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        let Vvendas = 0
        console.log(`\n Inicio do cadastro de serviço`);
        let nome = this.entrada.receberTexto(`Informe o nome do serviço: `)
        let registrados = this.servicos.map(x =>(x.nome))
        if (registrados.includes(nome)){
            console.log('O serviço já foi registrado')
            console.log()
        }
        else{
            let descricao = this.entrada.receberTexto(`Informe a descrição do serviço: `)
            let valor = this.entrada.receberNumero(`Informe o valor do serviço: `)
            let servico = new Servico(nome, descricao, valor, Vvendas)
            this.servicos.push(servico)
        }

        console.log(`\n Cadastro realizado com sucesso \n `);

    }
}