import { Component } from "react";

type props = {
    tema: string
}

export default class Início extends Component<props>{
    render(){
        let tema = this.props.tema
        return(
            <div className="container-fluid">
                <h3 className="container-fluid">Projeto PetLovers</h3>
                <p className="container-fluid">Wireframe do projeto PetLovers, para editar e deletar deve clicar em algum componente da lista, por exemplo se deseja
                deletar o cliente 1, quando você clicar no cliente 1 ele libera as funções editar e deletar!(É assim que eu pretendo fazer)
                </p>
            </div>
        )
    }

}