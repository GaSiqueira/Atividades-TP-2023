import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/Cadastros/cadastroCliente";
import CadastroServico from "../negocio/Cadastros/cadastroServico";
import CadastroPet from "../negocio/Cadastros/cadastroPet";
import CadastroProduto from "../negocio/Cadastros/cadastroProduto";
import ListagemClientes from "../negocio/Listar/listagemClientes";
import ListagemPets from "../negocio/Listar/listagemPets";
import ListagemServicos from "../negocio/Listar/listagemServico";
import ListagemProdutos from "../negocio/Listar/listagemProdutos";
import editarProduto from "../negocio/Editar/editarProduto";
import editarServico from "../negocio/Editar/editarServico";
import editarPet from "../negocio/Editar/editarPet";





console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log('---------Cadastrar---------')
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Cadastrar pet`);
    console.log(`3 - Cadastrar servico`);
    console.log(`4 - Cadastrar produto`);
    console.log('---------Deletar------------')
    console.log(`5 - Deletar cliente(WIP)`);
    console.log(`6 - Deletar pet(WIP)`);
    console.log(`7 - Deletar serviço(WIP)`);
    console.log(`8 - Deletar produto(WIP)`);
    console.log('-----------Listar-----------')
    console.log(`9 - Listar todos os clientes`);
    console.log(`10 - Listar todos os pets`);
    console.log(`11 - Listar todos os serviços`);
    console.log(`12 - Listar todos os produtos`);
    console.log('-----------Editar--------------')
    console.log(`13- Editar cliente(WIP)`)
    console.log(`14- Editar pet`)
    console.log(`15- Editar servico`)
    console.log(`16- Editar produto`)
    console.log('-----------RANKS----------------')
    console.log(`17- 10 clientes que mais consumiram produtos por quantidade(WIP)`)
    console.log(`18- 10 produtos mais consumidos(WIP)`)
    console.log(`19- Produtos mais consumidos por raça(WIP)`)
    console.log(`20- 5 clientes que mais consumiram em valor(WIP)`)

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
        case 13:
            
        case 14:
            let attPet = new editarPet(empresa.getPets)
            attPet.editar()
            break
        case 15:
            let attProduto = new editarProduto(empresa.getProdutos)
            attProduto.editar();
            break;
        case 16:
            let attServico = new editarServico(empresa.getServicos)
            attServico.editar()
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}