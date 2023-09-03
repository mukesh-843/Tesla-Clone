import React from "react";
import Header from "./Header";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import HistoryIcon from "@material-ui/icons/History";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useUserAuth } from "../context/UserAuthContext";

function Dashboard() {
  const { user, logOut } = useUserAuth();
  const handleSignOut = async() =>{
    try{
      await logOut();

    }catch(err){
      console.log(err.message);
    }
  };
  return (
    <Container>
      <Header />
      <Content>
        <LeftNavbar>
          <Wrap>
            <Icon>
              <HomeIcon />
            </Icon>
            <span>Dashboard</span>
          </Wrap>
          <Wrap>
            <Icon>
              <PermIdentityIcon />
            </Icon>
            <span>Profile Settings</span>
          </Wrap>
          <Wrap>
            <Icon>
              <CreditCardIcon />
            </Icon>
            <span>Payment Method</span>
          </Wrap>
          <Wrap>
            <Icon>
              <OfflineBoltIcon />
            </Icon>
            <span>Charging</span>
          </Wrap>
          <Wrap>
            <Icon>
              <AllInboxIcon />
            </Icon>
            <span>Loot Box</span>
          </Wrap>
          <Wrap>
            <Icon>
              <HistoryIcon />
            </Icon>
            <span>Order History</span>
          </Wrap>
          <Wrap >
            <Icon>
              <ExitToAppIcon onClick={handleSignOut} />
            </Icon>
            <span onClick={handleSignOut}>Sign Out</span>
          </Wrap>
        </LeftNavbar>
        <DashboardContent>
          <span>{user && user.email} 's Dashboard</span>
          <Details>
            <DetailsItem1 className="box">
              <div className="desc">
                <h3>Order Tesla Solar</h3>
                <p>Produce energy to power your Tesla life</p>
                <a href="#">View Solar</a>
              </div>
            </DetailsItem1>
            <DetailsItem2 className="box">
              <div className="desc">
                <h3>Reserve a Car</h3>
                <p>Browse our models</p>
                <a href="/">Shop Now</a>
              </div>
            </DetailsItem2>
            <DetailsItem3 className="box">
              <div className="desc">
                <h3>Purchased a car from a third party?</h3>
                <p></p>
                <a href="#">Add</a>
              </div>
            </DetailsItem3>
          </Details>
        </DashboardContent>
      </Content>
    </Container>
  );
}

export default Dashboard;

const DetailsItem1 = styled.div`
  background-image: url("/images/orderteslasolar.webp");
`;

const DetailsItem2 = styled.div`
  background-image: url("/images/reserveacar.jpeg");
`;
const DetailsItem3 = styled.div`
  background-color: white;
  background-image: url("/images/purchase.jpg");
`;
const Details = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Wrap = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  cursor:pointer;
  span {
    font-size: 18px;
    letter-spacing: 2px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 60px;
    margin-top: 20px;
  }
`;
const Icon = styled.div`
  width: 10px;
  margin-right: 20px;
`;
const Container = styled.div``;
const Content = styled.div`
  margin-top: 200px;
  display: flex;
  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;
const LeftNavbar = styled.div`
  width: 20vw;
  margin: 0 70px;
`;
const DashboardContent = styled.div`
  span {
    font-size: 40px;
    letter-spacing: 1px;
    margin-bottom: 30px;
    margin-left: 10px;

    @media (max-width: 768px) {
      font-size:20px;
      color:black;
    }
  }
  display: flex;
  flex-direction: column;
  .box {
    width: 320px;
    height: 220px;
    border: 1px solid grey;
    border-radius: 15px;
    margin: 10px;
    display: flex;
    align-items: flex-end;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (max-width: 768px) {
      width:250px;
      height:200px;
    }
  }

  .desc{
    height: 90px;
    width: 320px;
    background-color: white;
    border-top: none;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    //padding: 10px;
    @media (max-width: 768px) {
      width:250px;
      height:90px;
    }
    h3{
        font-size: 12px;
        letter-spacing: 0.4px;
        font-weight: 400;
        padding: 5px 8px;
    }
    p{
        font-size: 12px;
        letter-spacing: 0.4px;
        font-weight: 300;
        padding: 0px 8px;
        margin-bottom: 15px;
    }
    a{
        font-size: 0.8rem;
        letter-spacing: 0.4px;
        font-weight: 300;
        margin: 0 8px;
        text-decoration: none;
        border-bottom: 1px solid #5c5d61;
        transition: all 300ms ease-in;
        :hover{
            color: black;
            border-bottom: 2px solid black;
        }
    }
   
`;
