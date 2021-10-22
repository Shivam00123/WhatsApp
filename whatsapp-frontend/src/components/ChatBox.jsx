import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ChatBubble from "../assets/ChatBubble";
import SelfMessage from "../assets/SelfMessage";
import BackToDown from "../assets/BackToDown";

const ChatContainer = styled.div`
  width: 98%;
  height: 80%;
  margin: 10px;
  background-image: url("https://i.pinimg.com/originals/58/c3/33/58c33377dfcbb3022493dec49d098b02.jpg");
  box-shadow: 0 0 2px 2px lightgray;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow-y: scroll;
  scrollbar-width: none;
  padding-bottom: 1rem;
  align-items: flex-start;
`;

export default function ChatBox({ messages }) {
  const messageEl = useRef(null);

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);
  return (
    <ChatContainer ref={messageEl}>
      {messages.map((message) =>
        message.received ? (
          <ChatBubble message={message} />
        ) : (
          <SelfMessage message={message} />
        )
      )}
      <BackToDown />
    </ChatContainer>
  );
}
