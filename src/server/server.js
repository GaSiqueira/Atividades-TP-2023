const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'adm123',
  database: 'atv5',
};

async function connect() {
  const connection = await mysql.createConnection(dbConfig);
  return connection;
}

/* Cliente */

app.get ('/clientes', async(req, res) =>{
  const connection = await connect()
  const[rows] = await connection.execute('SELECT * FROM cliente')
  connection.end()
  res.json(rows)
})

app.post('/clientes', async(req, res)=>{
  const {nome, nome_social, genero, email, cpf, dataCpf, rg, dataRg, servico_consumido, produto_consumido} = req.body
  const connection = await connect()

  /* Evitar para que o CPF e o EMAIL sejam iguais */
  const [rows] = await connection.execute('SELECT cpf FROM cliente WHERE cpf=?', [cpf]);
  if(rows.length > 0){
    return res.status(400).json({error: 'CPF já cadastrado'})
  }
  const [rows2] = await connection.execute('SELECT email FROM cliente WHERE email =?', [email])
  if(rows2 > 0){
    return res.status(400).json({error: 'Email já cadastrado'})
  }
  const [rows3] = await connection.execute('SELECT rg FROM cliente WHERE email =?', [rg])
  if (rows3 > 0){
    return res.status(400).json({error:'RG já cadastrado'})
  }
  /* Insert na tabela */
  await connection.execute('INSERT INTO cliente(nome, nome_social, email, genero, cpf, dataCpf, rg, dataRg, servico_consumido, produto_consumido) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nome, nome_social, genero, email, cpf, dataCpf, rg, dataRg, servico_consumido, produto_consumido])
  res.json({message: 'Registro feito com sucesso'})
})

app.delete('/clientes/:id', async (req, res) => {
  const { id } = req.params;

  const connection = await connect();
  await connection.execute('DELETE FROM cliente WHERE id = ?', [id]);
  connection.end();

  res.json({ message: 'Cliente excluído com sucesso' });
});

app.put('/clientesEditar/:id', async (req, res) => {
  const { nome, nome_social, email} = req.body;
  const id = req.params.id;

  const connection = await connect();
  await connection.execute(
      'UPDATE cliente SET nome = ?, nome_social = ?, email = ? WHERE id = ?',
      [nome, nome_social, email, id]
  );

  const [updateRow] = await connection.execute ('SELECT * FROM cliente WHERE id = ?', [id]);
  res.json(updateRow[0])
});



/* Pet */

app.get('/pets', async(req,res)=>{
  const connection = await connect()
  const[rows] = await connection.execute('SELECT * FROM pet')
  connection.end()
  res.json(rows)
})

app.post('/pets', async(req,res)=>{
  const {cpf_dono, nome_pet, raca, genero, tipo} = req.body
  const connection = await connect()
  try{
    const[rows] = await connection.execute('SELECT * FROM cliente WHERE cpf =?', [cpf_dono])
    if(rows.length > 0 ){
    await connection.execute('INSERT INTO pet (cpf_dono, nome_pet, raca, genero, tipo) VALUES (?, ?, ?, ?, ?)', [cpf_dono, nome_pet, raca, genero, tipo])
    res.json({message: 'Resgistro de pet feito com sucesso'})
    }
    else{
      res.status(404).json({error: 'CPF não encontrado'})
    }
  } catch(error){
    console.log(error);
    res.status(500).json({error: 'Ocorreu um erro durante o processo'})
  }
  finally{
    try{
      if(connection){
        await connection.end()
      }
    }catch(error){
      console.log('Erro ao encerrar conexão com o banco de dados')
    }
  }

})

app.delete('/pets/:id', async (req, res) => {
  const { id } = req.params;

  const connection = await connect();
  await connection.execute('DELETE FROM pet WHERE id = ?', [id]);
  connection.end();

  res.json({ message: 'Pet excluído com sucesso' });
});


app.put('/petsEditar/:id', async (req, res) => {
  const { cpf_dono ,nome_pet, raca, genero, tipo} = req.body;
  const id = req.params.id;

  const connection = await connect();
  await connection.execute(
      'UPDATE pet SET cpf_dono = ?, nome_pet = ?, raca = ?, genero = ?, tipo = ? WHERE id = ?',
      [ cpf_dono, nome_pet, raca, genero, tipo, id]
  );

  const [updateRow] = await connection.execute ('SELECT * FROM pet WHERE id = ?', [id]);
  res.json(updateRow[0])
});

/* Produtos */

app.get('/produtos', async(req,res)=>{
  const connection = await connect()
  const[rows] = await connection.execute('SELECT * FROM produto')
  connection.end()
  res.json(rows)
})

app.post('/produtos', async(req,res)=>{
  const {nome_produto, desc_produto, vendas, valor} = req.body
  const connection = await connect()
  /* Verificação se o produto já existe */
  const [rows] = await connection.execute('SELECT nome_produto FROM produto WHERE nome_produto=?', [nome_produto])
  if(rows.length>0){
    return res.status(400).json({error: 'Produto já cadastrado'})
  }
  /* Insert na tabela */
  await connection.execute('INSERT INTO produto (nome_produto, desc_produto, vendas, valor) VALUES (?, ?, ?, ?)', [nome_produto, desc_produto, vendas, valor])
  res.json({message: 'Resgistro de produto feito com sucesso'})
})

app.delete('/produtos/:id', async (req, res) => {
  const { id } = req.params;

  const connection = await connect();
  await connection.execute('DELETE FROM produto WHERE id = ?', [id]);
  connection.end();

  res.json({ message: 'Produto excluído com sucesso' });
});


app.put('/produtosEditar/:id', async (req, res) => {
  const { nome_produto, desc_produto, valor} = req.body;
  const id = req.params.id;

  const connection = await connect();
  await connection.execute(
      'UPDATE produto SET nome_produto = ?, desc_produto = ?, valor = ? WHERE id = ?',
      [ nome_produto, desc_produto, valor, id]
  );

  const [updateRow] = await connection.execute ('SELECT * FROM produto WHERE id = ?', [id]);
  res.json(updateRow[0])
});

/* Servicos */

app.get('/servicos', async(req,res)=>{
  const connection = await connect()
  const[rows] = await connection.execute('SELECT * FROM servico')
  connection.end()
  res.json(rows)
})

app.post('/servicos', async(req,res)=>{
  const {nome_servico, desc_servico, vendas, valor} = req.body
  const connection = await connect()
  /* Verificação se o servico já existe */
  const [rows] = await connection.execute('SELECT nome_servico FROM servico WHERE nome_servico=?', [nome_servico])
  if(rows.length>0){
    return res.status(400).json({error: 'Serviço já cadastrado'})
  }
  /* Insert na tabela */
  await connection.execute('INSERT INTO servico (nome_servico, desc_servico, vendas, valor) VALUES (?, ?, ?, ?)', [nome_servico, desc_servico, vendas, valor])
  res.json({message: 'Resgistro de servico feito com sucesso'})
})

app.delete('/servicos/:id', async (req, res) => {
  const { id } = req.params;

  const connection = await connect();
  await connection.execute('DELETE FROM servico WHERE id = ?', [id]);
  connection.end();

  res.json({ message: 'Servico excluído com sucesso' });
});


app.put('/servicosEditar/:id', async (req, res) => {
  const { nome_servico, desc_servico, valor} = req.body;
  const id = req.params.id;

  const connection = await connect();
  await connection.execute(
      'UPDATE servico SET nome_servico = ?, desc_servico = ?, valor = ? WHERE id = ?',
      [ nome_servico, desc_servico, valor, id]
  );

  const [updateRow] = await connection.execute ('SELECT * FROM servico WHERE id = ?', [id]);
  res.json(updateRow[0])
});

/* Registro de venda serviço */
app.get('/servicosVendas', async(req,res)=>{
  const connection = await connect()
  const[rows] = await connection.execute('SELECT * FROM RegVendaServico')
  connection.end()
  res.json(rows)
})

app.post('/servicosVendas', async(req,res)=>{
  const {cpf_cliente, nome_servico, quantidade_vendida} = req.body
  const connection = await connect()
  /* Insert na tabela */
  try{
    const[rows] = await connection.execute('SELECT * FROM cliente WHERE cpf =?', [cpf_cliente])
    if(rows.length > 0 ){
    await connection.execute('INSERT INTO RegVendaServico (cpf_cliente, nome_produto, quantidade_vendida) VALUES (?, ?, ?)', [cpf_cliente, nome_servico, quantidade_vendida])
    res.json({message: 'Resgistro de venda do produto feito com sucesso'})
    }
    else{
      res.status(404).json({error: 'CPF do cliente não encontrado'})
    }
  } catch(error){
    console.log(error);
    res.status(500).json({error: 'Ocorreu um erro durante o processo'})
  }
  finally{
    try{
      if(connection){
        await connection.end()
      }
    }catch(error){
      console.log('Erro ao encerrar conexão com o banco de dados')
    }
  }
})

/* Registro venda produto */
app.get('/produtosVendas', async(req,res)=>{
  const connection = await connect()
  
  const[rows] = await connection.execute('SELECT * FROM RegVendaProduto')
  connection.end()
  res.json(rows)
})

app.post('/produtosVendas', async(req,res)=>{
  const {cpf_cliente, nome_produto, quantidade_vendida} = req.body
  const connection = await connect()
  /* Insert na tabela */
  try{
    const[rows] = await connection.execute('SELECT * FROM cliente WHERE cpf =?', [cpf_cliente])
    if(rows.length > 0 ){
    await connection.execute('INSERT INTO RegVendaServico (cpf_cliente, nome_produto, quantidade_vendida) VALUES (?, ?, ?)', [cpf_cliente, nome_produto, quantidade_vendida])
    res.json({message: 'Resgistro de venda do produto feito com sucesso'})
    }
    else{
      res.status(404).json({error: 'CPF do cliente não encontrado'})
    }
  } catch(error){
    console.log(error);
    res.status(500).json({error: 'Ocorreu um erro durante o processo'})
  }
  finally{
    try{
      if(connection){
        await connection.end()
      }
    }catch(error){
      console.log('Erro ao encerrar conexão com o banco de dados')
    }
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});