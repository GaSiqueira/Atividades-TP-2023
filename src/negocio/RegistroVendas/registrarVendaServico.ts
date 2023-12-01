import Cadastro from "../Cadastrar/cadastro";
import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";
import Entrada from "../../io/entrada";

export default class registrarVendaServico extends Cadastro{
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, servicos: Array<Servico>){
        super()
        this.clientes = clientes
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        let valorCpfCliente = this.entrada.receberTexto(`Por favor informe o CPF do cliente que realizou a compra: `);
        const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === valorCpfCliente);
        if(cliente){
            let servicoNome = this.entrada.receberTexto(`Informe o nome do serviço vendido: `);
            const servico = this.servicos.find(servico => servico.nome === servicoNome);
            if (servico){
                cliente.registrarVendaServico(servico)
                console.log('Venda registrada com sucesso!')
            }
            else{
                console.log(`Serviço informado não foi encontrado :(`)
            }
        }
        else{
            console.log(`Cliente com o CPF informado não foi encontrado :(`)
        }
    }
}