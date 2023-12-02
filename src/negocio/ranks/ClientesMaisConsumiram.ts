import Listagem from "../Listar/listagem";
import Cliente from "../../modelo/cliente";

export default class ClientesMaisCosumiram extends Listagem{
    private clientes: Array<Cliente>;
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }
    public listar(): void {
        const OrdClientes = this.clientes.sort((a, b) => b.getQuantidadeConsumidos - a.getQuantidadeConsumidos)
        console.log(`\n Top 10 clientes que mais consumiram produtos ou serviços: `)
        for (let i = 0; i<Math.min(10, OrdClientes.length); i++){
            const cliente = OrdClientes[i]
            console.log(`Nome: ` + cliente.nome)
            console.log(`Nome Social: ` + cliente.nomeSocial)
            console.log(`CPF: ` + cliente.getCpf.getValor)
            console.log(`Gênero: ` + cliente.genero)
            console.log(`Produtos Comprados: ` + cliente.getProdutosConsumidos)
            console.log(`Quantidade de produtos consumidos: ` + cliente.getQuantidadeConsumidos)
            console.log(`Valor gasto: R$` + cliente.getValorConsumidos.toFixed(2))
            console.log('======================================================================')
        }
    }
}