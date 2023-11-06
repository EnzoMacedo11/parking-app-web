import styled from "styled-components";
import Header from "../../components/header";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function Search() {
  const Navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext);
  const [userSearch, setUserSearch] = useState(null);
  console.log(userSearch);
  const [qrToken, setQrToken] = useState("");

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
          alert(`Code matched = ${decodedText}`);
          setQrToken(decodedText);
        }

        function onScanFailure(error) {
          console.warn(`Code scan error = ${error}`);
        }

        let html5QrcodeScanner = new Html5QrcodeScanner(
          "reader",
          { fps: 10, qrbox: { width: 250, height: 250 } },
          /* verbose= */ false
        );
        html5QrcodeScanner.render(onScanSuccess, onScanFailure);
      }
    }
  }, [userData]);

  function SearchUser() {
    axios
      .get("https://parking-web-svky.onrender.com/user/getuser", {
        headers: { token: qrToken },
      })
      .then((response) => {
        setUserSearch(response.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }

  function EnterKeyPress(event) {
    if (event.key === "Enter") {
      SearchUser();
    }
  }

  if (userData) {
    if (userData.admin === true) {
      return (
        <>
          <Header />
          <Container>
            <MainBox>
              <Title>Buscador</Title>
              <div id="reader" style={{width:"320px", height:"200px", display:"flex", alignItems:"center"}}></div>
              <Title>Insira o Token</Title>
              <InputStyle
              onKeyDown={EnterKeyPress}
                value={qrToken}
                onChange={(e) => setQrToken(e.target.value)}
              />
              <SendButton onClick={SearchUser}>Buscar</SendButton>
              {userSearch ? (
                <UserContainer>
                  <Title>Usuário Encontrado!</Title>
                  <UserText>Nome: {userSearch.name}</UserText>
                  <UserText>Matrícula: {userSearch.enrollment}</UserText>
                </UserContainer>
              ) : null}
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
  height: 90%;
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
  margin-bottom: 3%;
  margin-top: 5%;

  font-size: 16px;
  color: whitesmoke;

  @media (min-width: 600px) {
    font-size: 22px;
  }
`;

const InputStyle = styled.input`
  width: 75%;
  height: 5%;
  margin-left: 2%;
  border-radius: 15px;
  padding-left: 5%;
`;

const SendButton = styled.button`
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 6%;
  border-radius: 15px;
  font-size: 14px;
  background: #3498db;
  color: whitesmoke;
`;

const UserContainer = styled.div`
  display: flex;
  background-color: #3498db;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  width: 70%;
  height: 20%;
  margin-bottom: 10px;
  border-radius: 15px;
  border: solid 1px;
`;

const UserText = styled.text`
  font-size: 16px;
  margin-bottom: 3%;
  color: whitesmoke;

  @media (min-width: 600px) {
    font-size: 22px;
  }
`;
