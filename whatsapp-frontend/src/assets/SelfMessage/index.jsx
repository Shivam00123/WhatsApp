import React from "react";
import styled from "styled-components";

const MessageBody = styled.p`
  position: relative;
  font-size: 1.3rem;
  padding: 1rem;
  background-color: #74ec98;
  width: fit-content;
  margin-bottom: 3rem;
  border-radius: 10px;
  margin-left: auto;
`;

const Timestamp = styled.span`
  margin-left: 1.2rem;
  font-size: 1rem;
`;

export default function index({ message }) {
  console.log("self", message);
  return (
    <MessageBody>
      {message.message}
      <Timestamp>{message.timeStamp}</Timestamp>
    </MessageBody>
  );
}
