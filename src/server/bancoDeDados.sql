create database atv5;
use atv5;
CREATE TABLE IF NOT EXISTS cliente (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome varchar(30),
    nome_social varchar(20) default 'Nenhum',
    genero varchar (20),
    email varchar(50),
    cpf varchar(11),
    dataCpf date,
    rg varchar(20),
    dataRg date,
    servico_consumido int,
    produto_consumido int,
    UNIQUE KEY uq_cpf (cpf),
    UNIQUE KEY uq_rg (rg),
    UNIQUE KEY uq_email(email)
);

CREATE TABLE IF NOT EXISTS pet(
	id INT AUTO_INCREMENT PRIMARY KEY,
    cpf_dono varchar(11),
    nome_pet varchar(40),
    raca varchar(20),
    genero varchar(20),
    tipo varchar(20)
);

CREATE TABLE IF NOT EXISTS servico(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome_servico varchar(50),
	desc_servico varchar(100),
	vendas int,
	valor int
);

CREATE TABLE IF NOT EXISTS produto(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto varchar(50),
    desc_produto varchar(100),
    vendas int,
    valor int
);

CREATE TABLE IF NOT EXISTS RegVendaServico(
	id INT AUTO_INCREMENT PRIMARY KEY,
    cpf_cliente varchar(11),
    nome_servico varchar(50),
    quantidade_vendida int
);

CREATE TABLE IF NOT EXISTS RegVendaProduto(
	id INT AUTO_INCREMENT PRIMARY KEY,
    cpf_comprador varchar(11),
    nome_produto varchar(50),
    quantidade_vendida int
);

INSERT INTO cliente(nome, nome_social, genero, email, cpf, rg, servico_consumido, produto_consumido) values('João', 'Joana', 'outro', 'joao@gmail.com', '12345678910', '9292321235', 0, 0);
INSERT INTO cliente(nome, nome_social, genero, email, cpf, rg, servico_consumido, produto_consumido) values('Douglas', 'Ferrari','masculino', 'DouglasFerrari@gmail.com', '22222222222', '929267555', 0, 0);
INSERT INTO cliente(nome, nome_social, genero, email, cpf, rg, servico_consumido, produto_consumido) values('Pedro', 'Nenhum','masculino', 'pedro@gmail.com', '33333333333', '92925345355', 0, 0);
INSERT INTO cliente(nome, nome_social, genero, email, cpf, rg, servico_consumido, produto_consumido) values('Gabriel', 'Nenhum', 'masculino', 'gabriel@gmail.com', '31233131331', '929535355', 0, 0);
INSERT INTO cliente(nome, nome_social, genero, email, cpf, rg, servico_consumido, produto_consumido) values('Miguel', 'Nenhum','outro', 'miguel@gmail.com', '55555555555', '9292535355', 0, 0);

INSERT INTO pet(cpf_dono, nome_pet, raca, genero, tipo) values('31233131331', 'Tufão', 'Poddle', 'macho', 'pequeno');
INSERT INTO pet(cpf_dono, nome_pet, raca, genero, tipo) values('55555555555', 'Batata', 'Babão', 'macho', 'pequeno');
INSERT INTO pet(cpf_dono, nome_pet, raca, genero, tipo) values('31233131331', 'Billy', 'Pastor Alemão', 'macho', 'grande');
INSERT INTO pet(cpf_dono, nome_pet, raca, genero, tipo) values('22222222222', 'Princesa', 'Pintcher', 'fêmea', 'pequena');
INSERT INTO pet(cpf_dono, nome_pet, raca, genero, tipo) values('12345678910', 'Elvis', 'Chuwawa', 'macho', 'pequeno');

INSERT INTO servico(nome_servico, desc_servico, valor, vendas) values ('Banho e tosa higiênica', 'Banho e tosa com uma limpeza mais detalhada', 150.00, 0);
INSERT INTO servico(nome_servico, desc_servico, valor, vendas) values ('Banho e tosa para pequenos', 'Banho e tosa para animais pequenos', 120.60, 0);
INSERT INTO servico(nome_servico, desc_servico, valor, vendas) values ('Banho e tosa com perfume', 'Banho e tosa só que com direito ao perfume da casa', 180.50, 0);
INSERT INTO servico(nome_servico, desc_servico, valor, vendas) values ('Banho e tosa para grandes', 'Banho e tosa para animais grandes', 190.30, 0);
INSERT INTO servico(nome_servico, desc_servico, valor, vendas) values ('Banho e tosa', 'Banho e tosa com uma limpeza mais detalada', 110.20, 0);

INSERT INTO produto(nome_produto, desc_produto, valor, vendas) values ('Coleira', 'Coleira para levar seu animal para passear', 27.80, 0);
INSERT INTO produto(nome_produto, desc_produto, valor, vendas) values ('Escova de pelo', 'Escova para deixar o pelo de seu animal bem macio', 50.00, 0);
INSERT INTO produto(nome_produto, desc_produto, valor, vendas) values ('Pote para água e ração', 'Pote para água e ração de seu animalzinho', 70.00, 0);
INSERT INTO produto(nome_produto, desc_produto, valor, vendas) values ('Ração especial pequenos', 'Ração para seu pequeno favorito', 40.00, 0);
INSERT INTO produto(nome_produto, desc_produto, valor, vendas) values ('Ração de cavalo com anabolizante', 'Ração para seu pastor alemão preferido <3', 560.00, 0);


