import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LanguageIcon from "@material-ui/icons/Language";
import { selectCars } from "../features/car/carSlice";
import { selectsideMenus } from "../features/sideMenu/sideMenuSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  const sideMenus = useSelector(selectsideMenus);
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
          {cars &&
          cars.map((car) => (
            <a key={car.id+car.name} href={car.id}>
              {car.name}{" "}
            </a>
          ))} 
        
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="dashboard">Account</a>
        <HamburgerIcon onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <XButtonWrapper>
          <XButton onClick={() => setBurgerStatus(false)} />
        </XButtonWrapper>

        {sideMenus &&
          sideMenus.map((sideMenu) => (
            <li key={sideMenu.id}>
              <a key={sideMenu.id} href="#">
                {sideMenu.name}
              </a>
            </li>
          ))}
        <br />
        <Languageicon />
        <Language>
          <ul>
            United States
            <li>English</li>
          </ul>
        </Language>
      </BurgerNav>
    </Container>
  );
}

export default Header;
const Language = styled.div`
  ul {
    font-weight: 600;
  }
  li {
    font-size: 12px;
    margin-left: 25px;
  }
`;
const Languageicon = styled(LanguageIcon)`
  display: flex;
  float: left;
`;
const XButton = styled(CloseIcon)`
  cursor: pointer;
`;
const XButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const BurgerNav = styled.div`
  background: white;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  padding: 20px;
  text-align: left;
  z-index: 2;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;
  li {
    padding: 15px 0;
    list-style: none;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const HamburgerIcon = styled(MenuIcon)`
  cursor: pointer;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  a {
    font-weight: 600;
    margin-right: 10px;
  }
`;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  padding: 0 20px;
  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
