/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState} from "react";
import axios from 'axios'

type props = {
    tema: string
}

export default function ListaCliente(props: any){
        let red = "#fc6464"
        let tema = props.tema
        let green = "#00ff00"
        const [clientes, setClientes] = useState<Array<{id:number; nome:string; nome_social:string;genero:string; email:string; cpf:string; dataCpf:Date; rg:string; dataRg:Date; servico_consumido:number, produto_consumido:number }>>([])
        const [nome, setNome] = useState('')
        const [nome_social, setNomeSocial] = useState('')
        const [email, setEmail] = useState('');
        const [cerror, setError] = useState('');

        useEffect(()=>{
            axios.get('http://localhost:3001/clientes')
             .then((response) =>{
                setClientes(response.data)
             })
             .catch((error)=>{
                console.error(error)
             })
        }, [])

        const deletar = (id:number) =>{
            axios.delete(`http://localhost:3001/clientes/${id}`)
            .then((response) =>{
                updateClientes();
            })
            .catch((error) =>{
                console.error(error)
            })

        }

        const handleUpdate = (id: number) =>{
            if(nome && nome_social && email){
              axios.put(`http://localhost:3001/clientesEditar/${id}`, {nome, nome_social, email})
                .then(()=>{
                    updateClientes();
                    setNome('')
                    setNomeSocial('')
                    setEmail('')
                })
                .catch((error) =>{
                  console.error(error)
                })
            }
            else if(nome === '' || nome_social === '' || email === ''){
                setError('Preencha todos os campos, caso não for editar apenas coloque o mesmo valor anterior!')
            }  
     }

        const updateClientes = () =>{
            axios.get('http://localhost:3001/clientes')
            .then((response) => {
              setClientes(response.data);
            })
            .catch((error) => {
              console.error(error);
            });
        }
        


        return (
            <div className="container-fluid">
                <h5 className="container-fluid">Lista de clientes</h5>
                <div className="list-group">
                    {clientes.map((cliente, index) =>(
                        <div key={index} className="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button 
                                    className="accordion-button collapsed" 
                                    type="button" 
                                    data-bs-toggle ="collapse"
                                    data-bs-target={`#collapseOne${index}`} 
                                    aria-expanded="true" 
                                    aria-controls={`collapseOne${index}`}
                                    >
                                    {cliente.nome}
                                    </button>
                                </h2>
                            <div 
                            id={`collapseOne${index}`} 
                            className="accordion-collapse collapse"
                            >
                                <div className="accordion-body">
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">Nome:</label>
                                        <input type="text" className="form-control" value={nome} onChange={(e)=>setNome(e.target.value)} placeholder={cliente.nome} aria-label="Nome cliente" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">Nome Social:</label>
                                        <input type="text" className="form-control" value={nome_social} onChange={(e)=>setNomeSocial(e.target.value)} placeholder={cliente.nome_social} aria-label="Nome cliente" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">CPF:</label>
                                        <input type="text" className="form-control" placeholder={cliente.cpf} aria-label="CPF" aria-describedby="basic-addon1" disabled/>
                                    </div>
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">RG:</label>
                                        <input type="text" className="form-control" placeholder={cliente.rg} aria-label="RG" aria-describedby="basic-addon1" disabled/>
                                    </div>
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">E-mail:</label>
                                        <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder={cliente.email} aria-label="Email" aria-describedby="basic-addon1"/>
                                    </div>
                                    <br />
                                    <div className="input-group mb-3">
                                        <button className="input-group-text" onClick={()=>deletar(cliente.id)} style={{ background: red }}>Deletar</button>
                                        <button className="input-group-text" onClick={()=>handleUpdate(cliente.id)} style={{ background: green }}>Editar</button>
                                    </div>
                                    {cerror && <div className="alert alert-danger" role="alert" style={{color:'red'}}>{cerror}</div>}
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
}