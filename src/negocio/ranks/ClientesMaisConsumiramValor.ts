import Cliente from "../../modelo/cliente";
import Listagem from "../Listar/listagem";

export default class ClientesMaisConsumoValor extends Listagem{
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }
    public listar(): void {
        const cliOrd = this.clientes.sort((a, b) => b.getValorConsumidos - a.getValorConsumidos)
        console.log(`Clientes que mais consumiram(em valor):`)
        for(let x = 0; x<Math.min(5, cliOrd.length); x++){
            const cliente = cliOrd[x]
            console.log(`Nome: ` +cliente.nome)
            console.log(`CPF: ` +cliente.getCpf.getValor)
            console.log(`Gênero: ` +cliente.genero)
            console.log(`Valor gasto: R$ ${cliente.getValorConsumidos.toFixed(2)}`)
        }
    }
}