import mysql from 'mysql2'

const conn = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
})

//Para verificar se está funcionando, se sim, aparecer o resultado
conn.query('SELECT 1 + 1 AS solution', (err, result, fields)=>{
    if(err){
        console.error(err);
        return;
    }

    console.log("The solution is: ", result[0].solution);
});

export default conn;