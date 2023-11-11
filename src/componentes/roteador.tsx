import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormualarioCadastroProdutos from "./formularioCadastroProdutos";
import FormualarioCadastroServicos from "./formularioCadastroServico";
import ListaPet from "./listaPets";
import ListaProduto from "./listaProdutos";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
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
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes','Pets','Produtos','Serviços','Cadastro Cliente', 'Cadastro Pet', 'Cadastro Produto', 'Cadastro Serviço']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        }
        if (this.state.tela === 'Pets') {
            return (
                <>
                    {barraNavegacao}
                    <ListaPet tema="#e3f2fd" />
                </>
            )
        }
        if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="#e3f2fd" />
                </>
            )
        }
        if (this.state.tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="#e3f2fd" />
                </>
            )
        } 
        if (this.state.tela === 'Cadastro Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        }
        if (this.state.tela === 'Cadastro Pet'){
            return(
                <>
                    {barraNavegacao}
                    <FormularioCadastroPet tema="#e3f2fd" />
                </>
            )
        }
        if(this.state.tela === 'Cadastro Produto'){
            return(
                <>
                    {barraNavegacao}
                    <FormualarioCadastroProdutos tema = "#e3f2fd" />
                </>
            )
        }
        if(this.state.tela === 'Cadastro Serviço'){
            return(
                <>
                    {barraNavegacao}
                    <FormualarioCadastroServicos tema = "#e3f2fd" />
                </>
            )
        }
    }
}