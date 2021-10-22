import React from "react";
import styled from "styled-components";

const FriendMessage = styled.p`
  position: relative;
  font-size: 1.3rem;
  padding: 1rem;
  background-color: #fff;
  width: fit-content;
  margin-bottom: 3rem;
  border-radius: 10px;
`;

const FriendName = styled.span`
  position: absolute;
  top: -1.5rem;
  font-size: 1rem;
  font-weight: 800;
  color: #fff;
`;
const Timestamp = styled.span`
  margin-left: 1.2rem;
  font-size: 1rem;
`;

export default function index({ message }) {
  return (
    <FriendMessage>
      <FriendName>{message.name}</FriendName>
      {message.message}
      <Timestamp>{message.timeStamp}</Timestamp>
    </FriendMessage>
  );
}
