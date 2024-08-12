import conn from "../config/conn.js"

const tabelaEvento  = /*sql*/ `
CREATE TABLE IF NOT EXISTS eventos(
    eventos_id VARCHAR(60) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
`;

conn.query(tabelaEvento, (err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log("Tabela de [Eventos] criada com sucesso")
})