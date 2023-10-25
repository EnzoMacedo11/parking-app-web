import styled from "styled-components";

export default function Header(){
return(
    <Container>
            Parking-App
    </Container>
)

}


const Container = styled.div`
display:flex;
top:0;
width:100%;
height:8vh;

flex-direction:column;
background-color:#3498db;
align-items:center;
justify-content:center;
color:whitesmoke;
`