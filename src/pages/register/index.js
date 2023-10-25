import styled from "styled-components"
import Header from "../../components/header"
import { useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register(){
    const [enrollment,setEnrollment] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [passwordValidation,setPasswordValidation] = useState("");

    function SendForm(){
        if(password !==passwordValidation){
            alert("Senhas incorretas.Digite novamente sua senhas");
            setPassword("");
            setPasswordValidation("");
        }else{
            const data = {
                enrollment,
                password
            }
           axios.post("",data)
            .then(response =>{
                console.log(response.data)
            })
            .catch(error =>{
                console.log(error);
    
            })
        }
       
    }

    return(<>
    <Header/>
    <Container>
            
            <FormBox>
                <FormTitle>
                    Cadastro
                </FormTitle>
                <InputBox>
                <InputText>Matrícula</InputText>
                <InputStyle placeholder="Digite sua matrícula" value={enrollment} onChange={(e)=>setEnrollment(e.target.value)}/>
                </InputBox>
                <InputBox>
                <InputText>Nome</InputText>
                <InputStyle placeholder="Digite seu nome" value={name} onChange={(e)=>setName(e.target.value)}/>
                </InputBox>
                
                <InputBox>
                <InputText>Senha</InputText>
                <InputStyle placeholder="Digite sua senha" value={password} type="password" onChange={(e)=>setPassword(e.target.value)}/>
                </InputBox>
                <InputBox>
                <InputText>Confirme sua senha</InputText>
                <InputStyle placeholder="Digite sua senha novamente" value={passwordValidation} type="password" onChange={(e)=>setPasswordValidation(e.target.value)}/>
                </InputBox>
                <FormButton onClick={SendForm}>Registrar</FormButton>
                <Link to="/login">
                <LinkLoginRegister>
               Já tem uma conta? Clique aqui </LinkLoginRegister>
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
margin-bottom:2%;
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