import React from "react";
import styled from "styled-components";
import Image from "../assets/DisplayPicture";
import Logo from "../assets/Images/what.png";
import Marginer from "../assets/Marginer";
import InnerDiv from "../assets/Login";

const OuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #1aebb6 30%, #fff 10%);
`;

const LoginDiv = styled.div`
  width: 80%;
  height: 80%;
  border: none;
  box-shadow: -2px 4px 30px -7px rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
`;

const LeftDiv = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 10px;
`;

const LogoText = styled.span`
  color: #000;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 0.1rem;
`;

const Tag = styled.p`
  font-size: 1.2rem;
  font-weight: 650;
  color: #000;
  word-spacing: 0.2rem;
`;

const RightDiv = styled.div`
  height: 100%;
  width: 75%;
`;

export default function Login() {
  return (
    <OuterContainer>
      <LoginDiv>
        <LeftDiv>
          <Image width="8rem" height="8rem" ImageUrl={Logo} />
          <LogoText>WhatsApp</LogoText>
          <Marginer direction="vertical" margin="2rem" />
          <Tag>WhatsApp Messenger is a freeware and</Tag>{" "}
          <Tag> cross-platform instant messaging service for smartphones.</Tag>
        </LeftDiv>
        <RightDiv>
          <InnerDiv />
        </RightDiv>
      </LoginDiv>
    </OuterContainer>
  );
}
