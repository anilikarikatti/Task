const mysql = require("mysql2");


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'master',
  password:"root",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, 
  idleTimeout: 60000, 
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});


async function getConnection(){
    return new Promise((resolve,reject)=>{
        pool.getConnection(function(err, conn) {
            if(err){
                reject(err)
            }
            resolve(conn);
        })
    })
}


module.exports = {getConnection};