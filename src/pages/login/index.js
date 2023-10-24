import styled from "styled-components"
import Header from "../../components/header"

export default function Login(){
    return(
        <Container>
            <Header/>
            <FormBox>
                <FormTitle>
                    Login
                </FormTitle>
                <InputBox>
                </InputBox>
            </FormBox>
        </Container>
    )
}

const Container = styled.div`
display:flex;
width:100%;
height:100vh;
flex-direction:column;
background-color:grey;
align-items:center;

`
const FormBox = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:80%;
margin-top:10%;
height:80%;
border-radius:15px;
background-color:red;
`
const FormTitle = styled.text`
margin-top:5%;
font-size:22px;
color:black;

`
const InputBox = styled.div`
display:flex;
margin-top:5%;
flex-direction:column;
background-color:blue;
width:85%;
height: 15%;
border-radius:15px;
`