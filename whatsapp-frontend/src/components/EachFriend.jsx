import React from "react";
import styled from "styled-components";
import ImageContainer from "../assets/DisplayPicture";
import Image from "../assets/Images/dp.png";

const FriendInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;

  &:hover {
    background-color: #ebebeb;
  }
`;

const FriendNameandChat = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
`;
const Name = styled.span`
  font-weight: bold;
  font-size: 12pt;
`;
const Message = styled.span`
  font-size: 11pt;
`;
export default function index() {
  return (
    <FriendInfo>
      <ImageContainer ImageUrl={Image} height="4rem" width="4rem" />
      <FriendNameandChat>
        <Name>Shivam</Name>
        <Message>This is realtime</Message>
      </FriendNameandChat>
    </FriendInfo>
  );
}
