import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controller/postsController.js"; // Importa a função para listar posts do controlador

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    app.use(express.json()); // Habilita o middleware para analisar corpos de requisições JSON
    // Rota GET para obter todos os posts
    app.get("/posts", listarPosts); // Define a rota '/posts' para a função 'listarPosts' (listar todos os posts - get)

    app.post("/posts", postarNovoPost); // Define a rota '/posts' para a função 'postarNovoPost' (criar um novo post - post)

    app.post("/upload", upload.single("imagem"), uploadImagem); // Define a rota '/upload' para a função 'uploadImage' (upload de imagem - post)
}

export default routes;