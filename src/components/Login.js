import React, { useState } from "react";
import styled from "styled-components";
import LanguageIcon from "@material-ui/icons/Language";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
function Login() {
  document.title = "Tesla SSO - Sign In";
  const navigate = useNavigate();
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useUserAuth();
  const signin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(signinEmail, signinPassword);

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
        <h1>Sign In</h1>
        {error && <alert>{error}</alert>}
        <EmailAddress>
          <label>Email Address</label>
          <input
            type="Email"
            onChange={(event) => {
              setSigninEmail(event.target.value);
            }}
          />
        </EmailAddress>
        <Password>
          <label>Password</label>
          <input
            type="password"
            onChange={(event) => {
              setSigninPassword(event.target.value);
            }}
          />
        </Password>
        <button onClick={signin}>Sign In</button>
        <Or>
          <hr></hr>
          <span>OR</span>
          <hr></hr>
        </Or>
        <CreateAccount href="signup">Create Account</CreateAccount>
      </Content>
    </Container>
  );
}

export default Login;
const CreateAccount = styled.a`
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
  alert {
    color: red;
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
