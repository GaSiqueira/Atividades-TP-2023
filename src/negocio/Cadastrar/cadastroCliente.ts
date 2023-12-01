import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import Cadastro from "./cadastro"
import RG from "../../modelo/rg"
import Telefone from "../../modelo/telefone"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let genero = this.entrada.receberTexto(`Digite seu gênero (Masculino ou Feminino): `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf (dd/mm/yyyy): `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf, genero);

        valor = this.entrada.receberTexto(`Informe o número do RG: `)
        data = this.entrada.receberTexto(`Informe a data de emissão do RG (dd/mm/yyyy): `)
        partesData = data.split('/')
        ano = new Number(partesData[2].valueOf()).valueOf()
        mes = new Number(partesData[1].valueOf()).valueOf()
        dia = new Number(partesData[0].valueOf()).valueOf()
        dataEmissao = new Date(ano, mes, dia)
        let rg = new RG(valor, dataEmissao)
        cliente.getRgs.push(rg)
        let novoRg = this.entrada.receberTexto(`Deseja cadastrar outro RG? (sim/nao): `)
        while(novoRg === 'sim'){
            valor = this.entrada.receberTexto(`Informe o número do RG: `);
            data = this.entrada.receberTexto(`Informe a data de emissão do RG (dd/mm/yyyy): `);
            partesData = data.split('/')
            ano = new Number(partesData[2].valueOf()).valueOf()
            mes = new Number(partesData[1].valueOf()).valueOf()
            dia = new Number(partesData[0].valueOf()).valueOf()
            dataEmissao = new Date(ano, mes, dia)
            let rg = new RG(valor, dataEmissao)
            cliente.getRgs.push(rg);
            novoRg = this.entrada.receberTexto(`Deseja cadastrar outro RG? (sim/nao): `)
        }

        
        let tel = this.entrada.receberTexto(`Digite o número do telefone (DDD Número): `)
        let partTel = tel.split(' ')
        let ddd = new String(partTel[0].valueOf()).valueOf()
        let numero = new String(partTel[1].valueOf()).valueOf()
        let telefone = new Telefone(ddd, numero)
        cliente.getTelefones.push(telefone)
        let novoTel = this.entrada.receberTexto(`Deseja cadastar outro telefone? (sim/nao): `)
        while(novoTel === 'sim'){
            let tel = this.entrada.receberTexto(`Digite o número do telefone (DDD Número): `)
            
            let partTel = tel.split(' ')
            let ddd = new String(partTel[0].valueOf()).valueOf()
            let numero = new String(partTel[1].valueOf()).valueOf()
            let telefone = new Telefone(ddd, numero)
            cliente.getTelefones.push(telefone)
            novoTel = this.entrada.receberTexto(`Deseja cadastar outro telefone? (sim/nao): `)
        }
        
        this.clientes.push(cliente)
        console.log(`Cliente registrado com sucesso!`)
    }
}