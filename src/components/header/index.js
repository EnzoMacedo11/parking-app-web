import styled from "styled-components";
import UserContext from "../../context.js";
import { useContext } from "react";



export default function Header(){
const {userData, setUserData} = useContext(UserContext);
console.log(userData)

if(userData){
    return(
        <Container onClick={()=>setUserData(null)}> 
        Parking-App
       
       

</Container>
    )
}
else{
    return(
        <Container>
                Parking-App
        </Container>
    )
}


}


const Container = styled.div`
display:flex;
top:0;
width:100%;
height:8vh;

background-color:#3498db;
align-items:center;
justify-content:center;
color:whitesmoke;
`

const Right = styled.div`
position:absolute;
right:3%;
`