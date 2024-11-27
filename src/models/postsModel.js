import conectarAoBanco from "../config/dbconfig.js"; // Importa a função para conectar ao banco de dados (MongoDB, provavelmente)

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
    const db = conexao.db("imersaoInstalike"); // Seleciona o banco de dados 'imersaoInstalike'
    const colecao = db.collection("posts"); // Seleciona a coleção 'posts'
    return colecao.find().toArray(); // Executa a consulta e retorna todos os documentos como um array
  }

export async function criarPost(novoPost) {
  const db = conexao.db("imersaoInstalike"); // Seleciona o banco de dados 'imersaoInstalike'
  const colecao = db.collection("posts"); // Seleciona a coleção 'posts'
  return colecao.insertOne(novoPost); // Insere o novo post no banco de dados e retorna o resultado da operação
}
