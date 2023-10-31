import styled from "styled-components";
import Header from "../../components/header";
import { useContext, useEffect, useState } from "react";
import QRCode from "qrcode.react";
import UserContext from "../../context.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function History() {
  const Navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const [historyData, setHistoryData] = useState([]);
  console.log("hist", historyData);

  function formatarData(dataString) {
    const data = new Date(dataString);
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const diaFormatado = dia < 10 ? `0${dia}` : dia;
    const mesFormatado = mes < 10 ? `0${mes}` : mes;
    const horaFormatada = hora < 10 ? `0${hora}` : hora;
    const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
    return `${diaFormatado}/${mesFormatado} - ${horaFormatada}:${minutosFormatados}`;
  }

  useEffect(() => {
    if (!userData) {
      Navigate("/login");
    }
    if (userData) {
      if (userData.admin === false) {
        setUserData(null);
        Navigate("/login");
      }
      if (userData.admin === true) {
        if (historyData.length == 0) {
          console.log("fui");
          axios
            .get("http://192.168.0.14:4000/park/all", {
              headers: { token: userData.token },
            })
            .then((response) => {
              setHistoryData(response.data);
            })
            .catch((error) => {
              alert(error.message);
            });
        }
      }
    }
  }, [userData]);

  if (userData) {
    if (userData.admin === true) {
      return (
        <>
          <Header />
          <Container>
            <MainBox>
              <Title>Histórico</Title>
              <HistoryScroll>
              {historyData.map((c, k) => (
                
                     <HistoryContainer key={k}>
                  <HistoryItems>Matrícula:{c.enrollment}</HistoryItems>
                  <HistoryItems>Data: {formatarData(c.createdAt)}</HistoryItems>

                </HistoryContainer>
               
               
              ))}
               </HistoryScroll>
            </MainBox>
          </Container>
        </>
      );
    }
  }
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 92vh;
  flex-direction: column;
  background-color: #3498db;
  align-items: center;
  justify-content: center;
`;
const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height:90%;
  border-radius: 15px;
  background: linear-gradient(to bottom, #258cd0, #1c699c);
  
  @media (min-width: 600px) {
    max-width: 580px;
  }
  @media (min-height: 800px) {
    height: 700px;
  }
`;
const Title = styled.text`
  margin-bottom: 7%;
  margin-top: 5%;

  font-size: 16px;
  color: whitesmoke;

  @media (min-width: 600px) {
    font-size: 22px;
  }
`;

const HistoryContainer = styled.div`
  display: flex;
  background-color: cyan;
  justify-content:space-around;
  align-items: center;
  width: 100%;
  height:50px;
  margin-bottom: 10px;
  border-radius: 15px;
`;
const HistoryItems = styled.text`
  font-size: 18px;
  color: whitesmoke;
`;

const HistoryScroll = styled.div`
overflow-y: auto;

width:95%;
max-height: 88%;
`