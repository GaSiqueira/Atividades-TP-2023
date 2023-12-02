import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/Cadastrar/cadastroCliente";
import CadastroServico from "../negocio/Cadastrar/cadastroServico";
import CadastroPet from "../negocio/Cadastrar/cadastroPet";
import CadastroProduto from "../negocio/Cadastrar/cadastroProduto";
import ListagemClientes from "../negocio/Listar/listagemClientes";
import ListagemPets from "../negocio/Listar/listagemPets";
import ListagemServicos from "../negocio/Listar/listagemServico";
import ListagemProdutos from "../negocio/Listar/listagemProdutos";
import editarProduto from "../negocio/Editar/editarProduto";
import editarServico from "../negocio/Editar/editarServico";
import editarPet from "../negocio/Editar/editarPet";
import DeletarCliente from "../negocio/Deletar/deletarCliente";
import DeletarServico from "../negocio/Deletar/deletarServico";
import DeletarProduto from "../negocio/Deletar/deletarProduto";
import DeletarPet from "../negocio/Deletar/deletarPet";
import editarCliente from "../negocio/Editar/editarCliente";
import registrarVendaProduto from "../negocio/RegistroVendas/resgistrarVendaProduto";
import ClientesMaisCosumiram from "../negocio/ranks/ClientesMaisConsumiram";
import registrarVendaServico from "../negocio/RegistroVendas/registrarVendaServico";
import BaseClientes from "../modelo/clientesBase";
import EstoqueDeProdutos from "../negocio/estoque/estoqueDeProdutos";
import EstoqueDeServicos from "../negocio/estoque/estoqueDeServico";
import ProdutosMaisConsumidos from "../negocio/ranks/ProdutosMaisConsumidos";
import ServicosMaisConsumidos from "../negocio/ranks/serviçosMaisConsumidos";
import ClientesMaisConsumoValor from "../negocio/ranks/ClientesMaisConsumiramValor"





console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true
let ClientesBase = new BaseClientes(empresa.getClientes)
let EstoqueProdutos = new EstoqueDeProdutos(empresa.getProdutos)
let EstoqueServicos = new EstoqueDeServicos(empresa.getServicos)
ClientesBase.cadastrar()
EstoqueProdutos.cadastrar()
EstoqueServicos.cadastrar()

while (execucao) {
    console.log(`Opções:`)
    console.log('---------Cadastrar---------')
    console.log(`1 - Cadastrar cliente`)
    console.log(`2 - Cadastrar pet`)
    console.log(`3 - Cadastrar servico`)
    console.log(`4 - Cadastrar produto`)
    console.log('---------Deletar------------')
    console.log(`5 - Deletar cliente`)
    console.log(`6 - Deletar pet`)
    console.log(`7 - Deletar serviço`)
    console.log(`8 - Deletar produto`)
    console.log('-----------Listar-----------')
    console.log(`9 - Listar todos os clientes`)
    console.log(`10 - Listar todos os pets`)
    console.log(`11 - Listar todos os serviços`)
    console.log(`12 - Listar todos os produtos`)
    console.log('-----------Editar--------------')
    console.log(`13- Editar cliente`)
    console.log(`14- Editar pet`)
    console.log(`15- Editar servico`)
    console.log(`16- Editar produto`)
    console.log(`-------Registro De Vendas--------`)
    console.log(`17- Registrar venda de produto`)
    console.log(`18- Registrar venda de serviço`)
    console.log('------------RANKS--------------')
    console.log(`19- 10 clientes que mais consumiram produtos por quantidade`)
    console.log(`20- 10 produtos mais consumidos`)
    console.log(`21- Serviços mais consumidos`)
    console.log(`22- 5 clientes que mais consumiram em valor`)

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
            let delCliente = new DeletarCliente(empresa.getClientes)
            delCliente.deletar()
            break;
        case 6:
            let delPet = new DeletarPet(empresa.getPets)
            delPet.deletar()
            break;
        case 7:
            let delServico = new DeletarServico(empresa.getServicos)
            delServico.deletar()
            break;
        case 8:
            let delProduto = new DeletarProduto(empresa.getProdutos)
            delProduto.deletar()
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
            let attCliente = new editarCliente(empresa.getClientes)
            attCliente.editar()
            break
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
        case 17:
            let regVendaProduto = new registrarVendaProduto(empresa.getClientes, empresa.getProdutos)
            regVendaProduto.cadastrar()
            break
        case 18:
            let regVendaServico = new registrarVendaServico(empresa.getClientes, empresa.getServicos)
            regVendaServico.cadastrar()
            break    
        case 19:
            let rank10Consu = new ClientesMaisCosumiram(empresa.getClientes)
            rank10Consu.listar()
            break
        case 20:
            let pMaisCunso = new ProdutosMaisConsumidos(empresa.getProdutos)
            pMaisCunso.listar()
            break
        case 21:
            let pServConsu = new ServicosMaisConsumidos(empresa.getServicos)
            pServConsu.listar()
            break
        case 22:
            let MConsu = new ClientesMaisConsumoValor (empresa.getClientes)
            MConsu.listar()
            break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}