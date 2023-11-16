/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./cadastros/formularioCadastroCliente";
import Inicio from "./inicio";
import CadastrarPet from "./cadastros/formularioCadastroPet";
import CadastrarServico from "./cadastros/formularioCadastroServico";
import CadastrarProduto from "./cadastros/formularioCadastroProduto";

export default function Roteador() {
    const [tela, setTela] = useState('inicio')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        /* Listagem */
        if (tela === 'Listar' || 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Serviços', 'Produtos']} />
                    <ListaCliente tema="#e3f2fd" />
                </>

            )
        } 
        /* Cadastros */
        if (tela === 'Cadastros' || tela === 'Cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['inicio', 'Cliente', 'Pet', 'Serviço', 'Produto']} />
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        }
        if(tela === 'Pet'){
            return(
                <>
                <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['inicio', 'Cliente', 'Pet', 'Serviço', 'Produto']} />
                <CadastrarPet tema="#e3f2fd" />
            </>
            )
        }
        if(tela === 'Servico'){
            return(
                <>
                <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['inicio', 'Cliente', 'Pet', 'Serviço', 'Produto']} />
                <CadastrarServico tema="#e3f2fd" />
            </>
            )
        }
        if(tela === 'Produto'){
            return(
                <>
                <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['inicio', 'Cliente', 'Pet', 'Serviço', 'Produto']} />
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