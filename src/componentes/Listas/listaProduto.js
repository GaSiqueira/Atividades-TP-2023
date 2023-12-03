/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaProduto(props) {
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
                            Produto 1
                        </button>
                        </h2>
                        <div id="collapseOne1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <form className="row g-3">
                                    <div className="input-group-3">
                                        <input type="text" className="form-control" placeholder="Nome Produto 1" aria-label="Nome Produto 1" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="number" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" />
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
                            Produto 2
                        </button>
                        </h2>
                        <div id="collapseOne2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <form className="row g-3">
                                    <div className="input-group-3">
                                        <input type="text" className="form-control" placeholder="Nome Produto 2" aria-label="Nome Produto 2" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="number" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" />
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
                            Produto 3
                        </button>
                        </h2>
                        <div id="collapseOne3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <form className="row g-3">
                                    <div className="input-group-3">
                                        <input type="text" className="form-control" placeholder="Nome Produto 3" aria-label="Nome Produto 3" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="number" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" />
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
                            Produto 4
                        </button>
                        </h2>
                        <div id="collapseOne4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <form className="row g-3">
                                    <div className="input-group-3">
                                        <input type="text" className="form-control" placeholder="Nome Produto 4" aria-label="Nome Produto 4" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="number" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" />
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
                            Produto 5
                        </button>
                        </h2>
                        <div id="collapseOne5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <form className="row g-3">
                                    <div className="input-group-3">
                                        <input type="text" className="form-control" placeholder="Nome Produto 5" aria-label="Nome Produto 5" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="number" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" />
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