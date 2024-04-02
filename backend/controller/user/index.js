
const {getConnection} = require("../../dbConfig")


const userLogin = async(req,res)=>{


    let {email,password} = req.query;

    console.log(email);

    const connection = await getConnection();

    let query = `select * from user where email=?`
    console.log(query);
    try{

        connection.query(query, [email], (err,rows)=>{
            if(err){
                res.send(err)
                return ;
            }

            console.log(rows);
            if(rows.length <= 0){
            let data = {success: false , status : 204 , message :" User name does not exist"}

                res.send(data)
                return 0;
            }

            if(rows[0]?.password != password){
                let data = {success: false , status : 204 ,  message :"Wrong password "}

                res.send(data)
                return 0;

            }else{
            let data = {success: true , status : 200 , data : rows , message : "success"}

            res.send(data)
                return 0;

            }

           
            
        } )

    }
    catch(err){
        res.send(err);

    }

    finally{
        connection.release()
    }

}


module.exports = {userLogin}

