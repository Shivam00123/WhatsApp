import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Marginer from "../assets/Marginer";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import { auth, db } from "../firebase.js";
import { connect } from "react-redux";
import { Localstorage } from "../actions/localstorage";

const InnerContent = styled.div`
  width: 25%;
  height: 70%;
  background-color: white;
  border-radius: 10px;
  box-shadow: -1px 4px 30px -6px rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const InnerTitleDiv = styled.div`
  width: fit-content;
  margin-top: 2rem;
`;
const InnerTitle = styled.p`
  font-size: 1.4rem;
  color: #000;
  font-weight: 700;
`;

const SignUpButton = styled.button`
  width: 80%;
  height: 4rem;
  color: #fff;
  background-color: #f81a1a;
  border-radius: 20px;
  font-size: 1.4rem;
  padding: 3px;
  border: none;
  cursor: pointer;

  &:active {
    background-color: gray;
  }
`;
const BackToLogin = styled.p`
  font-size: 1rem;
  color: #f81a1a;
  font-weight: 700;
`;

const InputBox = styled.div`
  width: 90%;
  display: flex;
  position: relative;
  padding: 4px;
  border-bottom: 1px solid lightgray;
`;

const Input = styled.input`
  flex: 1;
  font-size: 1.3rem;
  border: none;
  outline: none;
  user-select: text;
`;
const Icon = styled.div`
  flex: 0;
  width: fit-content;
`;

function ContentDiv(props) {
  const [logged, setLogegd] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      props.dispatch(Localstorage(authUser));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignUp = (e) => {
    if (email && password && username) {
      e.preventDefault();
      console.log("inside");
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          console.log("auth", authUser);
          authUser.user.updateProfile({
            displayName: username,
          });
        })
        .catch((e) => alert(e));
      setEmail("");
      setPassword("");
      setUsername("");
    } else {
      alert("Please fill all the fields.");
    }
  };

  return (
    <InnerContent>
      <InnerTitleDiv>
        <InnerTitle>SIGN UP</InnerTitle>
      </InnerTitleDiv>
      <Marginer direction="vertical" margin="4rem" />
      <InputBox>
        <Input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <PersonIcon />
      </InputBox>
      <Marginer direction="vertical" margin="4rem" />
      <InputBox>
        <Input
          type="email"
          placeholder="joe@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <EmailIcon />
      </InputBox>
      <Marginer direction="vertical" margin="4rem" />
      <InputBox>
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LockIcon />
      </InputBox>
      <Marginer direction="vertical" margin="5rem" />
      <SignUpButton onClick={handleSignUp}>Get Started</SignUpButton>
      <Marginer direction="vertical" margin="2rem" />
      <BackToLogin>
        Go Back to to="/login" style=
        {{
          textDecoration: "none",
          fontSize: "1rem",
          color: "#f81a1a",
        }}
        LOGIN
      </BackToLogin>
    </InnerContent>
  );
}

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}
export default connect(mapStateToProps)(ContentDiv);
