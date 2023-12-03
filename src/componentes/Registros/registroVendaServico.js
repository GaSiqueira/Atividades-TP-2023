export default function RegistroVendaServico(props){
    let tema = props.tema
    return(
        <div className="container-fluid">
        <form>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="CPF do cliente" aria-label="CPF do cliente" maxLength={11} aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Nome serviço" aria-label="Nome serviço" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <input type="number" className="form-control" placeholder="Quantidade vendida" aria-label="Quantidade vendia" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
            </div>
        </form>
    </div>
    )
}