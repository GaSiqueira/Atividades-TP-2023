import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Deletar from "./deletar";

export default class DeletarPet extends Deletar{
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>){
        super()
        this.pets = pets
        this.entrada = new Entrada
    }
    public deletar(){
        let petNome = this.entrada.receberTexto(`Nome do pet que deseja deletar: `)
        const index = this.pets.findIndex(pet => pet.nome === petNome)
        if (index!== -1){
            this.pets.splice(index, 1)
            console.log(`O pet do nome digitado foi excluído!`)
        }
        else{
            console.log(`O nome do pet não foi encontrado`)
        }
    }
}