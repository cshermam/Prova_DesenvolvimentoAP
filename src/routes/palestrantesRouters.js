import { Router } from "express";

//Importar Controllers de usuario
import {register, listar} from "../controllers/palestrantesControllers.js"

//imporar hepers
import validarPalestrante from "../helpers/ValidarPalestrante.js";


const router = Router()

//localhost: 3333/usuarios/register
router.post("/palestrantes", validarPalestrante, register)
router.get("/palestrantes", listar)

export default router;