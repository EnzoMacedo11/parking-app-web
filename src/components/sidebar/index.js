import styled from "styled-components";
import { IoReader, IoReceiptOutline, IoQrCodeSharp } from "react-icons/io5";

export default function Sidebar(props) {
  const { visible } = props;
  console.log(visible);
  return (
    <Container visible={visible}>
      <Box>
        <IoReader style={{color:"whitesmoke"}} /> <Title>Histórico</Title>
      </Box>
      <Box>
        <IoQrCodeSharp  style={{color:"whitesmoke"}}/> <Title>Buscador</Title>
      </Box>


    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 3;
  width: 60%;
  margin-top: 8vh;
  height: 90%;
  background-color: #1f5884;
  border-bottom-right-radius: 20px;
  transition: transform 0.6s ease;
  transform: translateX(${(props) => (props.visible ? "0" : "-110%")});
  @media (min-width: 650px) {
    width: 15%;
    height: 90%;
  }
`;

const Box = styled.div`
  display: flex;
  
  width: 80%;
align-items:center;
justify-content:center;
  margin-top: 30px;
 

`;

const Title = styled.text`
  font-size: 20px;
  margin-left:3px;

  color: whitesmoke;
`;
