import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Marginer from "../Marginer";
import Button from "../Button";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { auth } from "../../firebase.js";
import { connect } from "react-redux";
import { Localstorage } from "../../actions/localstorage";

const InnerDiv = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const SignupButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 2rem;
  border: none;
  background: transparent;
  outline: none;
  font-size: 1.3rem;
  color: #000;
  font-weight: 600;
  cursor: pointer;
`;

const HeaderText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
`;

const InputIndicator = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  margin-right: auto;
  margin-left: 10%;
`;

const InputBox = styled.div`
  width: 80%;
  height: 4rem;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  outline: none;
  padding-left: 10px;
  user-select: text;
`;

const Forget = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin-left: auto;
  margin-right: 10%;
  cursor: pointer;
`;

function Index(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (email && password) {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        props.dispatch(Localstorage(authUser));
      });
      return () => {
        unsubscribe();
      };
      setEmail("");
      setPassword("");
    }
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => console.log(authUser))
      .catch((err) => alert(err));
    setEmail("");
    setPassword("");
  };

  return (
    <InnerDiv>
      <SignupButton>Sign Up</SignupButton>
      <Marginer direction="vertical" margin="10rem" />
      <HeaderText>Log In</HeaderText>
      <Marginer direction="vertical" margin="3rem" />
      <InputIndicator>Email</InputIndicator>
      <Marginer direction="vertical" margin="1rem" />
      <InputBox>
        <Input
          type="email"
          placeholder="joe@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputBox>
      <Marginer direction="vertical" margin="3rem" />
      <InputIndicator>Password</InputIndicator>
      <Marginer direction="vertical" margin="1rem" />
      <InputBox>
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputBox>
      <Marginer direction="vertical" margin="1rem" />
      <Forget>forget password?</Forget>
      <Marginer direction="vertical" margin="5rem" />
      <Button width="25rem" height="2rem" onClick={handleSignIn}>
        Login
      </Button>
    </InnerDiv>
  );
}

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}
export default connect(mapStateToProps)(Index);
