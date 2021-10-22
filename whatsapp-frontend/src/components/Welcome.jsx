import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../assets/Images/what.png";
import Marginer from "../assets/Marginer";
import Button from "../assets/Button";

const Main = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeMessage = styled.h1`
  color: #159b15;
  font-size: 3rem;
  font-weight: 600;
  word-spacing: 0.2rem;
  letter-spacing: 0.1rem;
`;

const ImageContainer = styled.div`
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  border: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Image = styled.img`
  height: 80%;
  width: 80%;
  object-fit: contain;
`;

const Policy = styled.p`
  font-size: 1.3rem;
  color: #fff;
  word-spacing: 0.2rem;
  letter-spacing: 0.1rem;
`;

export default function Welcome() {
  return (
    <Main>
      <Marginer direction="vertical" margin="3rem" />
      <WelcomeMessage>Welcome to WhatsApp</WelcomeMessage>
      <Marginer direction="vertical" margin="3rem" />
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <Marginer direction="vertical" margin="3rem" />
      <Policy>Read our Privacy Policy.Tap 'Agree and continue' to </Policy>
      <Policy>accept the Terms of Service</Policy>
      <Marginer direction="vertical" margin="5rem" />
      <Button width="25rem" height="1rem">
        AGREE AND CONTINUE
      </Button>
    </Main>
  );
}
