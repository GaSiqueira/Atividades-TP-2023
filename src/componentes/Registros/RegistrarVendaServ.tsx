import { Component } from "react";

type props = {
    tema: string
}

export default class RegistrarVendaServico extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF do cliente" aria-label="CPF do cliente" maxLength={11} aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome do produto" aria-label="Nome do produto" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Quantidade vendida" aria-label="Quantidade vendida" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Registrar venda</button>
                    </div>
                </form>
            </div>
        )
    }
}