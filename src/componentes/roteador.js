/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./Listas/listaCliente";
import FormularioCadastroCliente from "./cadastros/formularioCadastroCliente";
import CadastrarPets from "./cadastros/formularioCadastroPets";
import Inicio from "./inicio";
import CadastrarServico from "./cadastros/formularioCadastroServico";
import CadastrarProduto from "./cadastros/formularioCadastroProduto";
import ListaPet from "./Listas/listaPet";
import ListaServico from "./Listas/listaServico";
import ListaProduto from "./Listas/listaProduto";

export default function Roteador() {
    const [tela, setTela] = useState('Cadastros')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        if (tela === 'Listar' || tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Inicio','Clientes', 'Pets', 'Serviços', 'Produtos']} />
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        }
        if(tela === 'Pets'){
            return(
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Inicio','Clientes', 'Pets', 'Serviços', 'Produtos']} />
                    <ListaPet tema="#e3f2fd"/>
                </>
            )
        }
        if(tela === 'Serviços'){
            return(
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Inicio','Clientes', 'Pets', 'Serviços', 'Produtos']} />
                    <ListaServico tema="#e3f2fd"/>
                </>
            )
        }
        if(tela === 'Produtos'){
            return(
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Inicio','Clientes', 'Pets', 'Serviços', 'Produtos']} />
                    <ListaProduto tema="#e3f2fd"/>
                </>
            )
        }
        if (tela === 'Cadastros' || tela === 'Cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Inicio', 'Cliente', 'Pet', 'Serviço', 'Produto']} />
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        }
        if(tela === 'Pet'){
            return(
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Inicio', 'Cliente', 'Pet', 'Serviço','Produto']} />
                    <CadastrarPets tema="#e3f2fd" />
                </>
            )
        }
        if(tela === 'Serviço'){
            return(
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Inicio', 'Cliente', 'Pet', 'Serviço','Produto']} />
                    <CadastrarServico tema="#e3f2fd" />
                </>
            )
        }
        if(tela === 'Produto'){
            return(
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Inicio', 'Cliente', 'Pet', 'Serviço','Produto']} />
                    <CadastrarProduto tema="#e3f2fd" />
                </>
            )
        }
        else{
            return(
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes ={['Listar', 'Cadastros']} />
                    <Inicio tema='#e3f2fd'/>
                </>
            )
        }
    }

    return (
        construirView()
    )
}