import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pusher from "pusher-js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";
import Profile from "./Sidebar";
import RightDiv from "./RightContainer";
import axios from "../axios.js";
import Welcome from "./Welcome";
import Login from "./Login";
import OuterDiv from "./SignUp";
import firebase from "../firebase";
import { storedToken } from "../actions/localstorage";
import ContentDiv from "./ContentDiv";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #dadbd3; */
  @media screen and (max-width: 480px) {
    max-height: 100vh;
  }
`;
const Innerconatainer = styled.div`
  width: 90%;
  height: 90%;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
  display: flex;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const PrivateRoute = (PrivateRouteProps) => {
  const { path, islogin, component: Component } = PrivateRouteProps;
  return (
    <Route
      path={path}
      render={(props) => {
        return islogin ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/signup" }} />
        );
      }}
    />
  );
};

function App(props) {
  const [messages, setMessages] = useState([]);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    axios.get("/messages/fetch").then((response) => {
      console.log("response", response.data);
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("b40003835bb3c4b322c7", {
      cluster: "ap2",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      setMessages([...messages, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <Container>
      <Innerconatainer>
        <Profile />
        <RightDiv messages={messages} />
      </Innerconatainer>
    </Container>
  );
}

function mapStateToProps(state) {
  console.log("App State", state);
  return {
    login: state.login,
  };
}

export default connect(mapStateToProps)(App);
