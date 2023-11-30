import Entrada from "../../io/entrada";
import pet from "../../modelo/pet";
import Editar from "./editar";

export default class editarPet extends Editar{
    private pet: Array<pet>
    private entrada: Entrada
    constructor(pet: Array<pet>){
        super()
        this.pet = pet
        this. entrada = new Entrada();
    }
    public editar(): void{
        console.log(`Lista de pets`)
        this.pet.forEach(x =>{
            console.log(`pet: ${x.nome}`)
        })
        let entrada = this.entrada.receberTexto(`Digite qual o nome do pet que deseja editar: `)
        let todospets = this.pet.map(y => y.nome)
        let indexpets = todospets.indexOf(entrada)
        if (indexpets == -1){
            console.log('pet não encontrado!')
        }
        else{
            let novoNome = this.entrada.receberTexto(`Digite o novo nome: `)
            let novaRaca = this.entrada.receberTexto(`Digite a nova raça: `)
            let novoGenero = this.entrada.receberTexto(`Digite o novo gênero: `)
            let novoTipo = this.entrada.receberTexto(`Digite o novo tipo do pet: `)
            this.pet.filter(pet => pet.nome == entrada).map(x => x.nome == novoNome).toString()
            this.pet.filter(pet => pet.nome == entrada).map(x => x.nome == novaRaca).toString()
            this.pet.filter(pet => pet.nome == entrada).map(x=> x.nome == novoTipo).toString()
            this.pet.filter(pet => pet.nome == entrada).map(x=> x.nome == novoGenero).toString()
            
            console.log(`pet foi alterado com sucesso!`)
        }
    }
}