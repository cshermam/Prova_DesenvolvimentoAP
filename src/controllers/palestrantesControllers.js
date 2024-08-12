import conn from "../config/conn.js"
import {v4 as uuidv4} from "uuid"

//criar Palestrante
export const register = (request, response) =>{
    const{nome, expertise} = request.body;

        //CADASTRAR Palestrante
        const id =  uuidv4()

        const insertSql = /*sql*/ `INSERT INTO palestrantes (??, ??, ??) VALUES (?, ?, ?)`

        const insertData = ["palestrante_id", "nome", "expertise", id, nome, expertise]
        conn.query(insertSql, insertData, (err)=>{
            if(err){
                console.error(err)
                response.status(500).json({err: "Erro ao cadastrar Palestrante"})
                return
            }

            const palestranteSql = /*sql*/ `SELECT * FROM palestrantes WHERE ?? = ?`
            const palestranteData = ["palestrante_id", id] 
            conn.query(palestranteSql, palestranteData, async (err, data) => {
                if(err){
                    console.error(err);
                    response.status(500).json({err: "Erro ao selecionar Palestrante"})
                    return
                }
                response.status(200).json({msg: "Palestrante Cadastrado"})
               
            })
            
        })
}

export const listar = (request, response) => {

    const sql = /*sql*/ `SELECT * FROM palestrantes` ;
    conn.query(sql, (err, data) => {
        if (err) {
        response.status(500).json({ message: "Erro ao buscar os palestrantes" });
        return console.log(err);
        }
        const palestrantes = data;
        
        response.status(200).json(palestrantes);
    });
    }

