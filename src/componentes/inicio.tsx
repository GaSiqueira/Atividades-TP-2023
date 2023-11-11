import { Component } from "react";

type props = {
    tema: string
}

export default class Início extends Component<props>{
    render(){
        let tema = this.props.tema
        return(
            <div className="container-fluid">
                <h1 className="container-fluid">Projeto PetLovers</h1>
                <p className="container-fluid">O projeto petlovers</p>
            </div>
        )
    }

}