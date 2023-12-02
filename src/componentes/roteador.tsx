import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./Listas/listaClientes";
import FormularioCadastroCliente from "./Cadastros/formularioCadastroCliente";
import FormularioCadastroPet from "./Cadastros/formularioCadastroPet";
import FormualarioCadastroProdutos from "./Cadastros/formularioCadastroProdutos";
import FormualarioCadastroServicos from "./Cadastros/formularioCadastroServico";
import ListaPet from "./Listas/listaPets";
import ListaProduto from "./Listas/listaProdutos";
import Início from "./inicio";
import ListaServiço from "./Listas/listaServicos";
import RegistrarVendaProduto from "./Registros/RegistrarVenda";
import RegistrarVendaServico from "./Registros/RegistrarVendaServ";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Início'
                    }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Listar','Cadastrar', 'Registrar']} />
        if(this.state.tela === 'Início'){
            return(
                <>
                    {barraNavegacao}
                    <Início tema="#e3f2fd"/>
                </>
            )
        }
        if (this.state.tela === 'Listar Clientes' || this.state.tela === 'Listar') {
            let barraListagem = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Listar Clientes', 'Listar Pets', 'Listar Produtos', 'Listar Serviços']} />

            return (
                <>
                    {barraListagem}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        }
        if (this.state.tela === 'Listar Pets') {
            let barraListagem = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Listar Clientes', 'Listar Pets', 'Listar Produtos', 'Listar Serviços']} />
            return (
                <>
                    {barraListagem}
                    <ListaPet tema="#e3f2fd" />
                </>
            )
        }
        if (this.state.tela === 'Listar Produtos') {
            let barraListagem = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Listar Clientes', 'Listar Pets', 'Listar Produtos', 'Listar Serviços']} />
            return (
                <>
                    {barraListagem}
                    <ListaProduto tema="#e3f2fd" />
                </>
            )
        }
        if (this.state.tela === 'Listar Serviços') {
            let barraListagem = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Listar Clientes', 'Listar Pets', 'Listar Produtos', 'Listar Serviços']} />
            return (
                <>
                    {barraListagem}
                    <ListaServiço tema="#e3f2fd" />
                </>
            )
        } 
        if (this.state.tela === 'Cadastrar Cliente' || this.state.tela === 'Cadastrar') {
            let barraCadastro = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Cadastrar Cliente', 'Cadastrar Pet', 'Cadastrar Produto', 'Cadastrar Serviço']} />
            return (
                <>
                    {barraCadastro}
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        }
        if (this.state.tela === 'Cadastrar Pet'){
            let barraCadastro = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Cadastrar Cliente', 'Cadastrar Pet', 'Cadastrar Produto', 'Cadastrar Serviço']} />
            return(
                <>
                    {barraCadastro}
                    <FormularioCadastroPet tema="#e3f2fd" />
                </>
            )
        }
        if(this.state.tela === 'Cadastrar Produto'){
            let barraCadastro = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Cadastrar Cliente', 'Cadastrar Pet', 'Cadastrar Produto', 'Cadastrar Serviço']} />
            return(
                <>
                    {barraCadastro}
                    <FormualarioCadastroProdutos tema = "#e3f2fd" />
                </>
            )
        }
        if(this.state.tela === 'Cadastrar Serviço'){
            let barraCadastro = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Cadastrar Cliente', 'Cadastrar Pet', 'Cadastrar Produto', 'Cadastrar Serviço']} />
            return(
                <>
                    {barraCadastro}
                    <FormualarioCadastroServicos tema = "#e3f2fd" />
                </>
            )
        }
        if(this.state.tela === 'Registrar'|| 'Registrar produto'){
            let barraRegistro = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Registrar produto', 'Registrar serviço']} />
            return(
                <>
                    {barraRegistro}
                    <RegistrarVendaProduto tema = "#e3f2fd" />
                </>
            )
        }
        if(this.state.tela === 'Registrar serviço'){
            let barraRegistro = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Registrar produto', 'Registrar serviço']} />
            return(
                <>
                    {barraRegistro}
                    <RegistrarVendaServico tema = "#e3f2fd" />
                </>
            )
        }
    }
}