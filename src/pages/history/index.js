import styled from "styled-components";
import Header from "../../components/header";
import { useContext, useEffect, useState } from "react";
import QRCode from "qrcode.react";
import UserContext from "../../context.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dateFormat from "../../components/dateFormat";

export default function History() {
  const Navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const [historyData, setHistoryData] = useState([]);
  //console.log("hist", historyData);



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
              alert(error.response.data);
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
                
                     <HistoryContainer key={k}><InfDiv>
                     <HistoryItems>N: {c.id} / </HistoryItems> 
                     <HistoryItems>Matr: {c.enrollment}</HistoryItems></InfDiv>
                  
                  <HistoryItems>Data: {dateFormat(c.createdAt)}</HistoryItems>

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
  background-color: #3498db;
  justify-content:space-around;
  align-items: center;
  width: 98%;
  height:70px;
  margin-bottom: 10px;
  border-radius: 15px;
  border: solid 1px;
`;
const HistoryItems = styled.text`
  font-size: 18px;
  color: whitesmoke;
`;

const HistoryScroll = styled.div`
overflow-y: auto;
scrollbar-width: none;
-ms-overflow-style: none;
&::-webkit-scrollbar {
    width: 0;
  }
width:95%;
max-height: 85%;
`
const InfDiv = styled.div`

`
