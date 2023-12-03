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
            </div>
        )
    }

}