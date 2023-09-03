import React from "react";
import styled from "styled-components";
import LanguageIcon from "@material-ui/icons/Language";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Signup() {
  const navigate = useNavigate();
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error,setError]=useState("");
  const {signUp} =useUserAuth();
  document.title = "Tesla SSO - Sign Up";
  const register = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(
        registerEmail,
        registerPassword
      );

      navigate("/dashboard");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };
  return (
    <Container>
      <Menu>
        <div>
          <a href="/">
            <img src="/images/logo.svg" alt="" />
          </a>
        </div>
        <RightMenu>
          <Languageicon />
          <span>en-US</span>
        </RightMenu>
      </Menu>
      <Content>
        <h1>Create Account</h1>
        {error && <alert >{error}</alert> }
        <FirstName>
          <label>First Name</label>
          <input
            type="text"
            onChange={(event) => {
              setRegisterFirstName(event.target.value);
            }}
          />
        </FirstName>
        <LastName>
          <label>Last Name</label>
          <input
            type="text"
            onChange={(event) => {
              setRegisterLastName(event.target.value);
            }}
          />
        </LastName>
        <EmailAddress>
          <label>Email Address</label>
          <input
            type="Email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
        </EmailAddress>
        <Password>
          <label>Password</label>
          <input
            type="password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
        </Password>
        <button onClick={register}>Create Account</button>
        <Or>
          <hr></hr>
          <span>OR</span>
          <hr></hr>
        </Or>
        <Signin href="login">Sign In</Signin>
      </Content>
    </Container>
  );
}

export default Signup;

const Signin = styled.a`
  margin: 20px;
  width: 300px;
  background-color: white;
  color: black;
  border-radius: 100px;
  height: 40px;
  border: 4px solid;
  padding: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: black;
    color: white;
  }
`;
const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: wrap;
  margin: 2px 5px 2px 30px;
`;

const Languageicon = styled(LanguageIcon)``;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 10px;

  span {
    padding: 10px;
  }
  &:hover {
    background-color: rgba(211, 211, 211, 0.3);
  }
`;
const Content = styled.div`
  alert{
    color:red;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    margin-top: 100px;
    width: 350px;
  }
  button {
    background-color: rgb(61, 105, 225);
    width: 300px;
    height: 40px;
    border-radius: 100px;
    border: 0;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    &:hover {
      background-color: rgba(61, 105, 225, 0.8);
    }
  }
`;

const EmailAddress = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;

  label {
    margin-left: 15px;
    margin-bottom: 10px;
    font-size: 16px;
    color: rgb(92, 94, 98);
  }
  input {
    height: 40px;
    width: 300px;
    padding-left: 10px;
    border-radius: 100px;
    background-color: rgba(211, 211, 211, 0.3);
    border: none;
    outline: none;
    font-size: 16px;
  }
`;
const FirstName = styled(EmailAddress)``;
const LastName = styled(EmailAddress)``;
const Password = styled(EmailAddress)``;

const Or = styled.div`
  margin-top: 50px;
  width: 300px;
  display: flex;
  align-items: center;
  hr {
    border-width: 1px;
    width: 100%;
    height: 0px;
    opacity: 0.4;
    margin: 0 10px;
  }
  span {
    color: rgb(92, 94, 98);
  }
`;
