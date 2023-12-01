import Cliente from "./cliente";
import RG from "./rg";
import Telefone from "./telefone";
import CPF from "./cpf";
import Cadastro from "../negocio/Cadastrar/cadastro";

export default class BaseClientes extends Cadastro {
    private clientes: Array<Cliente>


    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes

    }

    public cadastrar(): void {
        let nome = 'Joana Matos';
        let nomeSocial = '';
        let valor = '12345678910';
        let data = '31/01/1990';
        let cpf = new CPF(valor, new Date(1990, 0, 31));
        let rgs: RG[] = [];
        let rg = new RG('2424276867886', new Date(2010, 0, 15));
        rgs.push(rg);
        let telefone = new Telefone('13', '24247586786');
        let genero: 'Feminino' | 'Masculino' = 'Feminino';
        let quantidadeConsumidos = 10;
        let valorConsumidos = 5;
        let telefones: Telefone[] = [];
        telefones.push(telefone);
        let cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();

      
        nome = 'Luana Silva';
        nomeSocial = '';
        valor = '123';
        data = '28/05/1985';
        cpf = new CPF(valor, new Date(1985, 4, 28));
        rgs = [];
        rg = new RG('2646464224242', new Date(2015, 1, 20));
        rgs.push(rg);
        telefone = new Telefone('42423', '84244265464');
        genero = 'Feminino';
        quantidadeConsumidos = 5;
        valorConsumidos = 6;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();

       
        nome = 'Roberto Gomes';
        nomeSocial = '';
        valor = '123456';
        data = '03/03/1985';
        cpf = new CPF(valor, new Date(1985, 2, 3));
        rgs = [];
        rg = new RG('464646', new Date(2005, 2, 5));
        rgs.push(rg);
        telefone = new Telefone('5667', '7645649');
        genero = 'Masculino';
        quantidadeConsumidos = 1;
        valorConsumidos = 1;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();

       
        nome = 'Pedro Anelis';
        nomeSocial = 'Analis';
        valor = '11092001';
        data = '15/07/1992';
        cpf = new CPF(valor, new Date(1992, 6, 15));
        rgs = [];
        rg = new RG('89', new Date(2012, 4, 10));
        rgs.push(rg);
        telefone = new Telefone('4666', '6646641058');
        genero = 'Feminino';
        quantidadeConsumidos = 0;
        valorConsumidos = 0;
        telefones = [];
        telefones.push(telefone);
        cliente = new Cliente(nome, nomeSocial, cpf, genero, quantidadeConsumidos, valorConsumidos);
        this.clientes.push(cliente);
        telefones.pop();
        rgs.pop();
    }
}