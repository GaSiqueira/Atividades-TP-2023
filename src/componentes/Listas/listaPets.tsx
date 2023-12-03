/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ListaPet extends Component<props>{
    render() {
        let red = "#fc6464"
        let tema = this.props.tema
        let green = "#00ff00"
        return (
            <div className="container-fluid">
                <div className="list-group">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                    Pet 1
                                </button>
                            </h2>
                            <div id="collapseOne1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <form className="row g-3">
                                        <div className="input-group-3">
                                            <input type="text" className="form-control" placeholder="Nome pet 1" aria-label="Nome pet 1" aria-describedby="basic-addon1"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <button className="input-group-text" style={{ background: red }}>Deletar</button>
                                            <button className="input-group-text" style={{ background: green}}>Editar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                                    Pet 2
                                </button>
                            </h2>
                            <div id="collapseOne2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <form className="row g-3">
                                        <div className="input-group-3">
                                            <input type="text" className="form-control" placeholder="Nome pet 2" aria-label="Nome pet 2" aria-describedby="basic-addon1"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <button className="input-group-text" style={{ background: red }}>Deletar</button>
                                            <button className="input-group-text" style={{ background: green}}>Editar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
                                    Pet 3
                                </button>
                            </h2>
                            <div id="collapseOne3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <form className="row g-3">
                                        <div className="input-group-3">
                                            <input type="text" className="form-control" placeholder="Nome pet 3" aria-label="Nome pet 3" aria-describedby="basic-addon1"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <button className="input-group-text" style={{ background: red }}>Deletar</button>
                                            <button className="input-group-text" style={{ background: green}}>Editar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne4">
                                    Pet 4
                                </button>
                            </h2>
                            <div id="collapseOne4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <form className="row g-3">
                                        <div className="input-group-3">
                                            <input type="text" className="form-control" placeholder="Nome pet 4" aria-label="Nome pet 4" aria-describedby="basic-addon1"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <button className="input-group-text" style={{ background: red }}>Deletar</button>
                                            <button className="input-group-text" style={{ background: green}}>Editar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true" aria-controls="collapseOne5">
                                    Pet 5
                                </button>
                            </h2>
                            <div id="collapseOne5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <form className="row g-3">
                                        <div className="input-group-3">
                                            <input type="text" className="form-control" placeholder="Nome pet 5" aria-label="Nome pet 5" aria-describedby="basic-addon1"/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <button className="input-group-text" style={{ background: red }}>Deletar</button>
                                            <button className="input-group-text" style={{ background: green}}>Editar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}