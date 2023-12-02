import Servico from "../../modelo/servico";
import Listagem from "../Listar/listagem";

export default class ServicosMaisConsumidos extends Listagem{
    private servicos: Array<Servico>;

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
    }
    public listar(): void {
        const servOrd = this.servicos.sort((a, b) => b.getservicosPrestados - a.getservicosPrestados)
        console.log(`Serviços mais consumidos: `)
        for (let x=0; x<Math.min(5, servOrd.length);x++){
            const servico = servOrd[x]
            console.log(`Nome: `+servico.nome)
            console.log(`Descrição: `+servico.descricao)
            console.log(`Valor: `+servico.valor)
            console.log(`Quantidade de vezes consumido: `+servico.getservicosPrestados)
            console.log(`Valor total das vendas: R$ ${servico.getvalorVendas}`)
        }
    }
}