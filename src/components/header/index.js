import styled from "styled-components";
import UserContext from "../../context.js";
import { useContext, useState } from "react";
import { IoLogOutOutline, IoMenu,IoShieldCheckmarkOutline } from "react-icons/io5";
import Sidebar from "../sidebar/index.js";

export default function Header() {
  const { userData, setUserData } = useContext(UserContext);
  const [visible, setVisible] = useState(false);

  function SidebarToogle() {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  if (userData) {
    if (userData.admin === true) {
      return (
        <>
          <Sidebar visible={visible} />
          <Container>
            <Left>
              <IoMenu size={22} onClick={SidebarToogle} />
            </Left>
            Parking-App <IoShieldCheckmarkOutline  size={18} style={{marginLeft:"5px"}}/>
            <Right>
              <IoLogOutOutline onClick={() => setUserData(null)} size={22} />
            </Right>
          </Container>
        </>
      );
    } else {
      return (
        <Container onClick={() => setUserData(null)}>
          Parking-App
          <Right>
            <IoLogOutOutline size={22} />
          </Right>
        </Container>
      );
    }
  } else {
    return <Container>Parking-App</Container>;
  }
}

const Container = styled.div`
  display: flex;
  top: 0;
  width: 100%;
  height: 8vh;

  background-color: #3498db;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
  font-size: 16px;

  @media (min-width: 600px) {
    font-size: 26px;
  }
`;

const Right = styled.div`
  position: absolute;
  right: 3%;
`;

const Left = styled.div`
  position: absolute;
  left: 3%;
`;
