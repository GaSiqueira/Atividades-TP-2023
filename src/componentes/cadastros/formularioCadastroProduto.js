export default function CadastrarProduto(props){
    let tema = props.tema
    return(
        <div className="container-fluid">
        <form>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Nome produto" aria-label="Nome produto" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Descrição do produto" aria-label="Descrição do produto" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Valor do produto" aria-label="Valor do produto" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
            </div>
        </form>
    </div>
    )
}