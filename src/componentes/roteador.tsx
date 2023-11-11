import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormualarioCadastroProdutos from "./formularioCadastroProdutos";
import FormualarioCadastroServicos from "./formularioCadastroServico";
import ListaPet from "./listaPets";
import ListaProduto from "./listaProdutos";
import Início from "./inicio";
import ListaServiço from "./listaServicos";

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
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Listar','Cadastrar']} />
        if(this.state.tela === 'Início'){
            return(
                <>
                    {barraNavegacao}
                    <Início tema="#e3f2fd"/>
                </>
            )
        }
        if (this.state.tela === 'Listar' || this.state.tela === 'Clientes') {
            let barraListagem = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Clientes', 'Pets', 'Produtos', 'Serviços']} />

            return (
                <>
                    {barraListagem}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        }
        if (this.state.tela === 'Pets') {
            let barraListagem = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Clientes', 'Pets', 'Produtos', 'Serviços']} />
            return (
                <>
                    {barraListagem}
                    <ListaPet tema="#e3f2fd" />
                </>
            )
        }
        if (this.state.tela === 'Produtos') {
            let barraListagem = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Clientes', 'Pets', 'Produtos', 'Serviços']} />
            return (
                <>
                    {barraListagem}
                    <ListaProduto tema="#e3f2fd" />
                </>
            )
        }
        if (this.state.tela === 'Serviços') {
            let barraListagem = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Clientes', 'Pets', 'Produtos', 'Serviços']} />
            return (
                <>
                    {barraListagem}
                    <ListaServiço tema="#e3f2fd" />
                </>
            )
        } 
        if (this.state.tela === 'Cadastro Cliente' || this.state.tela === 'Cadastrar') {
            let barraCadastro = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Cadastro Cliente', 'Cadastro Pet', 'Cadastro Produto', 'Cadastro Serviço']} />
            return (
                <>
                    {barraCadastro}
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        }
        if (this.state.tela === 'Cadastro Pet'){
            let barraCadastro = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Cadastro Cliente', 'Cadastro Pet', 'Cadastro Produto', 'Cadastro Serviço']} />
            return(
                <>
                    {barraCadastro}
                    <FormularioCadastroPet tema="#e3f2fd" />
                </>
            )
        }
        if(this.state.tela === 'Cadastro Produto'){
            let barraCadastro = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Cadastro Cliente', 'Cadastro Pet', 'Cadastro Produto', 'Cadastro Serviço']} />
            return(
                <>
                    {barraCadastro}
                    <FormualarioCadastroProdutos tema = "#e3f2fd" />
                </>
            )
        }
        if(this.state.tela === 'Cadastro Serviço'){
            let barraCadastro = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Início','Cadastro Cliente', 'Cadastro Pet', 'Cadastro Produto', 'Cadastro Serviço']} />
            return(
                <>
                    {barraCadastro}
                    <FormualarioCadastroServicos tema = "#e3f2fd" />
                </>
            )
        }
        if(this.state.tela === 'Início'){
            return(
                <>
                    <Roteador/>
                </>
            )
        }
    }
}