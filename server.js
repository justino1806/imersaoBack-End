import express from "express"; // Importa o framework Express para criar a aplicação web
import routes from "./src/routes/postsRoutes.js"; // Importa as rotas definidas em 'postsRoutes.js'

const app = express(); // Cria uma instância do aplicativo Express
routes(app); // Chama a função 'routes' para configurar as rotas do aplicativo

app.listen(3000, () => { // Inicia o servidor na porta 3000
  console.log("Server is running on port 3000");
  console.log("entre aqui: http://localhost:3000/posts");
});
