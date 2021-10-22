import React from "react";
import styled from "styled-components";
import ChatNavbar from "./ChatNavbar";
import ChatContainer from "./ChatBox";
import InputConatiner from "./MessageInput";

const RightDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export default function RightContainer({ messages }) {
  return (
    <RightDiv>
      <ChatNavbar />
      <ChatContainer messages={messages} />
      <InputConatiner />
    </RightDiv>
  );
}
