import React from "react";
import styled from "styled-components";
import FriendInfo from "./EachFriend";

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  align-items: center;
  margin-bottom: 5px;
  border-bottom: 1px solid lightgray;

  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 100vh;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
`;

export default function index() {
  return (
    <List>
      <Title>Chats</Title>
      <FriendInfo />
      <FriendInfo />
      <FriendInfo />
      <FriendInfo />
      <FriendInfo />
      <FriendInfo />
      <FriendInfo />
    </List>
  );
}
