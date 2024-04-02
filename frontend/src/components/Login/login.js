
import * as React from 'react';
import { emailValidation , passwordValidation } from '../../utils';
import axios from 'axios';
import { useState } from 'react';
  import BaseUrl from "../../api.js"
import { Box, Button, TextField, Typography } from "@mui/material";

import toast, { Toaster } from 'react-hot-toast';


import { useNavigate } from 'react-router-dom';

export default function Login(){

  const navigate = useNavigate()

  let [credentials , setCredentials ] = useState({});

  let [validations,setValidations] = useState({
    email:"",
    password:"",
  })


  const handleChangeData = (e)=>{

  
    let {name,value} = e.target;

    if(name == "email"){
       let valid =  emailValidation(value)

       console.log(valid);
       
       valid ?  setValidations({...validations,email:false}) : setValidations({...validations,email:true}) 
       
    }

    if(name == "password"){
       let valid =  passwordValidation(value)

       console.log(value);

       console.log(valid);
       
       valid ?  setValidations({...validations,password:false}) : setValidations({...validations,password:true}) 
       
    }

    setCredentials({...credentials,[name]:value})
  }

  const sendData = async()=>{
    console.log("called");
    try{

      console.log(validations.email , validations.password , credentials?.email , credentials?.password);

      if(!validations.email && !validations.password && credentials?.email && credentials?.password){

        let res =await axios.get(`${BaseUrl}/user/login?email=${credentials?.email}&password=${credentials?.password}`) 
        // let res = ""
        console.log(res);
        if(res?.data?.success){
          localStorage.setItem("login",credentials?.email);


          setCredentials({})
          window.location.href = "/dashboard"
          // navigate("/dashboard")


        }else{
          console.log("invalid user");
          // setCredentials({})
          toast.error(res?.data?.message)

        }
      }
    }
    catch{
      console.log("error");
    }
  }

   return (


      <Box
       paddingRight={1}
        height="100%"
        width= "100%"
        sx={{
          background: "#FFF",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems:  "center",
          paddingTop:"10%"
        }}
    >
    <Toaster  position='top-right'/>

      <Box
        sx={{
          width: "100%",
          textAlignLast:  "center",
        }}
      >
       
        <Typography
          sx={{
            fontWeight: "400",
            color: "#737373",
            marginTop: "0.2rem",
            marginBottom: "1rem",
            fontSize: "3rem",
          }}
        >
         Login
        </Typography>
      </Box>
      <Box
        mt={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "0.7rem",
        }}
      >
        <TextField
          label="Enter your Email"
          value={credentials.email || ""}
          onChange={handleChangeData}
          variant="outlined"
          name="email"
          size="small"
          sx={{ width: "30rem", borderRadius: "0.4rem" }}
        />
        {validations?.email && (
          <span style={{color:"red"}}>Invalid Email</span>
        )}
        <span style={{ position: "relative" }}>
          <TextField
            label="Enter password"
            name="password"
            type="password"
            value={credentials.password || ""}
            onChange={handleChangeData}
            variant="outlined"
            size="small"
            sx={{ width:  "30rem", borderRadius: "0.4rem" }}
          />
        
        </span>
         {validations?.password && (
          <span style={{color:"red"}}>Password needs: 1 uppercase, 1 lowercase, 1 special character, min. 8 characters.</span>
        )}
        <Typography
          sx={{
            color: " #8A8A8A",
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "-0.8rem",
            width: "100%",
            fontWeight: 500,
            fontSize: "0.6rem",
          }}
        >
        </Typography>
      </Box>
      <Button sx ={{
        borderRadius: "0.4rem",
        background: (validations?.email || validations?.password )? "#c5a1ff" : "green" ,
        color: "black",
        marginTop:  "1rem",
        textTransform: "none",
        
       
        "&:hover": {
         background: (validations?.email || validations?.password )? "#c5a1ff" : "green" ,
          color: "black",
        },
      }} onClick={sendData}>Login</Button>

    </Box>

      
  );
}
