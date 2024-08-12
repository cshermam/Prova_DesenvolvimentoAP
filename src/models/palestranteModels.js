import conn from "../config/conn.js";

const tabelaPalestrantes = /*sql*/ `
    CREATE TABLE IF NOT EXISTS palestrantes(
        palestrante_id VARCHAR(60) PRIMARY KEY,
        nome varchar(255) not null, 
        expertise varchar(255) not null,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
`;
conn.query(tabelaPalestrantes, (err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log("Tabela [Palestrantes] criada com sucesso")
})

