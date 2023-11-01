import styled from "styled-components";
import Header from "../../components/header";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Html5QrcodeScanner} from "html5-qrcode";

export default function Search() {
  const Navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const [qrToken,setQrToken] = useState("")

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
        function onScanSuccess(decodedText, decodedResult) {
          // handle the scanned code as you like, for example:
          console.log(`Code matched = ${decodedText}`, decodedResult);
        }
        
        function onScanFailure(error) {
          // handle scan failure, usually better to ignore and keep scanning.
          // for example:
          console.warn(`Code scan error = ${error}`);
        }
        
        let html5QrcodeScanner = new Html5QrcodeScanner(
          "reader",
          { fps: 10, qrbox: {width: 250, height: 250} },
          /* verbose= */ false);
        html5QrcodeScanner.render(onScanSuccess, onScanFailure);
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
              <Title>Buscador</Title>
              <div id="reader" width="600px"></div>
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
  height:85px;
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
