import fs from "fs"; // Importa o módulo 'fs' para trabalhar com o sistema de arquivos
import  { getTodosPosts, criarPost } from "../models/postsModel.js"; // Importa a função para obter todos os posts do modelo

export async function listarPosts(req, res) {
    const resultado = await getTodosPosts(); // Chama a função para buscar os posts
    res.status(200).json(resultado); // Envia os posts como resposta em formato JSON com status 200 (sucesso)
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body; // Obtém os dados do novo post do corpo da requisição
    try {
      const postCriado = await criarPost(novoPost);
      res.status(200).json(postCriado); // Envia o novo post como resposta em formato JSON com status 200 (sucesso)
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ "Erro":'Falha na requisição' }); // Envia uma mensagem de erro como resposta em formato JSON com status 500 (erro interno do servidor)
    }
}

export async function uploadImagem(req, res) {
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: ""
  };
  try {
    const postCriado = await criarPost(novoPost);
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`; // Atualiza a URL da imagem com o nome do arquivo
    fs.renameSync(req.file.path, imagemAtualizada); // Renomeia o arquivo de upload para o nome atualizado
    res.status(200).json(postCriado); // Envia o novo post como resposta em formato JSON com status 200 (sucesso)
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ "Erro":'Falha na requisição' }); // Envia uma mensagem de erro como resposta em formato JSON com status 500 (erro interno do servidor)
  }
}
