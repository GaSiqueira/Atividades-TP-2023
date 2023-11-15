/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./cadastros/formularioCadastroCliente";
import Inicio from "./inicio";

export default function Roteador() {
    const [tela, setTela] = useState('Cadastros')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        if (tela === 'Listar') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Serviços', 'Produtos']} />
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } if (tela === 'Cadastros') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['inicio', 'Clientes', 'Pet', 'Serviço', 'Produto']} />
                    <FormularioCadastroCliente tema="#e3f2fd" />
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