import React from "react";
import styled from "styled-components";
import Navbar from "./Profilenavbar";
import List from "./Friend";
// import Marginer from "../Marginer";

const Profile = styled.div`
  width: 40%;
  height: 100%;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  border-right: 1px solid lightgray;

  @media screen and (max-width: 480px) {
    max-width: 100vw;
    max-height: 100vh;
  }
`;

export default function index() {
  return (
    <Profile>
      <Navbar />
      <List />
    </Profile>
  );
}
