import styled from "styled-components"
import Header from "../../components/header"
import { useState } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import QRCode from "qrcode.react";

export default function Home(){

    const token = "teste token 123456"
    const windowHeight = window.innerHeight;
    const qrCodeHeight = (windowHeight*0.3)

    return(<>
    <Header/>
    <Container>
            <MainBox>
                <Title>
                    Bem vindo "Nome", <br/>
                    Aproxime seu celular ao leitor.
                </Title>
                <QRCode size={qrCodeHeight} value={token} />
            </MainBox>
        </Container></>
        
    )
}

const Container = styled.div`
display:flex;
width:100%;
height:92vh;
flex-direction:column;
background-color:#3498db;;
align-items:center;
justify-content:center;

`
const MainBox = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:80%;
height:75%;
border-radius:15px;
background: linear-gradient(to bottom, #258CD0, #1C699C);
`
const Title = styled.text`
margin-bottom:7%;

font-size:16px;
color:black;

`






const InputBox = styled.div`
display:flex;
margin-top:5%;
flex-direction:column;
background-color:blue;
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
color:black;
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
background-color:green;

`
const LinkLoginRegister = styled.text`
font-size:12px;
color:black;
`