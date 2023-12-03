/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaCliente(props) {
    let tema = props.tema
    let green = "#00ff00"
    let red = "#fc6464"
    return (
        <div className="container-fluid">
            <div className="list-group">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                            Cliente 1
                        </button>
                        </h2>
                        <div id="collapseOne1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <form className="row g-3">
                                    <div className="input-group-3">
                                        <input type="text" className="form-control" placeholder="Nome cliente 1" aria-label="Nome cliente 1" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome Social" aria-label="Nome Social" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
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
                            Cliente 2
                        </button>
                        </h2>
                        <div id="collapseOne2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <form className="row g-3">
                                    <div className="input-group-3">
                                        <input type="text" className="form-control" placeholder="Nome cliente 2" aria-label="Nome cliente 2" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome Social" aria-label="Nome Social" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
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
                            Cliente 3
                        </button>
                        </h2>
                        <div id="collapseOne3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <form className="row g-3">
                                    <div className="input-group-3">
                                        <input type="text" className="form-control" placeholder="Nome cliente 3" aria-label="Nome cliente 3" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome Social" aria-label="Nome Social" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
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
                            Cliente 4
                        </button>
                        </h2>
                        <div id="collapseOne4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <form className="row g-3">
                                    <div className="input-group-3">
                                        <input type="text" className="form-control" placeholder="Nome cliente 4" aria-label="Nome cliente 4" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome Social" aria-label="Nome Social" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
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
                            Cliente 5
                        </button>
                        </h2>
                        <div id="collapseOne5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <form className="row g-3">
                                    <div className="input-group-3">
                                        <input type="text" className="form-control" placeholder="Nome cliente 5" aria-label="Nome cliente 5" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome Social" aria-label="Nome Social" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
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