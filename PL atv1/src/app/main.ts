import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroServico from "../negocio/cadastroServico";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemPets from "../negocio/listagemPets";
import ListagemServicos from "../negocio/listagemServico";
import ListagemProdutos from "../negocio/listagemProdutos";





console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Cadastrar pet`);
    console.log(`3 - Cadastrar servico`);
    console.log(`4 - Cadastrar produto`);
    console.log(`5 - Deletar cliente`);
    console.log(`6 - Deletar pet`);
    console.log(`7 - Deletar serviço`);
    console.log(`8 - Deletar produto`);
    console.log(`9 - Listar todos os clientes`);
    console.log(`10 - Listar todos os pets`);
    console.log(`11 - Listar todos os serviços`);
    console.log(`12 - Listar todos os produtos`);
    console.log(`0 - Sair`);
    
    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes)
            cadastroCliente.cadastrar()
            break;
        case 2:
            let cadastroPet = new CadastroPet(empresa.getPets)
            cadastroPet.cadastrar()
            break;
        case 3:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 4:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            let listagemClientes = new ListagemClientes(empresa.getClientes)
            listagemClientes.listar()
            break;
        case 10:
            let listagemPets = new ListagemPets(empresa.getPets)
            listagemPets.listar()
            break;
        case 11:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break;
        case 12:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}