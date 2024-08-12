import "dotenv/config";
import express from "express";

const PORT = process.env.PORT;

//importar conexão
import conn from "./config/conn.js";

//importação dos módulos (TABELA)
import "./models/eventoModel.js";
import "./models/palestranteModels.js"
import "./models/participanteModels.js"

//importar as rotas
import router from "./routes/palestrantesRouters.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//utilizar a rota
app.use("/eventos", router);


//404
app.use((request, response) => {
  response.status(404).json({ message: "Recurso não encontrado" });
});

app.listen(PORT, () => {
  console.log("SERVIDOR ON PORT:" + PORT);
});
