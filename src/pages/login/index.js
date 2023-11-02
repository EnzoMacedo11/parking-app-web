import styled from "styled-components"
import Header from "../../components/header"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate,  } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context.js";

export default function Login(){
    const {userData, setUserData} = useContext(UserContext)
    const Navigate = useNavigate()
    const [enrollment,setEnrollment] = useState("");
    const [password,setPassword] = useState("")

    useEffect(()=>{
        if(userData){
        Navigate("/")
        }
    },[userData])

    function SendForm(){
        const data = {
            enrollment,
            password
        }
       axios.post("https://parking-web-svky.onrender.com/user/signin",data)
        .then(response =>{
            setUserData({
                name:response.data.name,
                token:response.data.token,
                admin:response.data.admin
            })   
            Navigate("/")
       
        })
        .catch(error =>{
            alert(error.response.data);
        })
    }

    function EnterKeyPress(event) {
        if (event.key === "Enter") {
          SendForm();
        }
      }

    return(<>
    <Header/>
    <Container>
            
            <FormBox>
                <FormTitle>
                    Login
                </FormTitle>
                <InputBox>
                <InputText>Matrícula</InputText>
                <InputStyle placeholder="Digite sua matrícula" value={enrollment} onChange={(e)=>setEnrollment(e.target.value)}/>
                </InputBox>
                <InputBox>
                <InputText>Senha</InputText>
                <InputStyle onKeyDown={EnterKeyPress} placeholder="Digite sua senha" value={password} type="password" onChange={(e)=>setPassword(e.target.value)}/>
                </InputBox>
                <FormButton onClick={SendForm}>Login</FormButton>
                <Link to="/register">
                <LinkLoginRegister>
                Não tem uma conta? Clique aqui </LinkLoginRegister>
                </Link>
            </FormBox>
        </Container></>
        
    )
}

const Container = styled.div`
display:flex;
width:100%;
height:92vh;
flex-direction:column;
background: linear-gradient(to bottom, #3498db, #523170);
align-items:center;
justify-content:center;

`
const FormBox = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:80%;
height:75%;
border-radius:15px;

@media (min-width: 600px) {
    width: 580px;
    
}
@media (min-height: 800px) {
    height: 700px;
}

`
const FormTitle = styled.text`
margin-bottom:2%;
font-size:22px;
color:whitesmoke;

`
const InputBox = styled.div`
display:flex;
margin-top:5%;
flex-direction:column;

width:85%;
height: 15%;
justify-content:center;
border-radius:20px;
`
const InputStyle = styled.input`
width:85%;
height:35%;
margin-left:2%;
border-radius:15px;
padding-left:5%;

`
const InputText = styled.text`
margin-left:5%;
margin-bottom:2%;
font-size:16px;
color:whitesmoke;
`

const FormButton = styled.button`
margin-top:5%;
margin-bottom:5%;
display:flex;
justify-content:center;
align-items:center;
width:35%;
height:6%;
border-radius:15px;
font-size:14px;
background:#3498db;
color:whitesmoke;

`
const LinkLoginRegister = styled.text`
font-size:12px;
color:whitesmoke;
`