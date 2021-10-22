import React from "react";
import styled from "styled-components";
import Image from "../assets/DisplayPicture";
import ImageSrc from "../assets/Images/dp.png";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MessageIcon from "@material-ui/icons/Message";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";

const Navbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    width: 100vw;
  }
`;

const LinksDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  background-color: #f6f6f6;
  margin-bottom: 10px;
  border: none;
  outline: none;
  font-size: 1.2rem;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;

export default function index(props) {
  return (
    <Navbar>
      <LinksDiv>
        <Image ImageUrl={ImageSrc} height="4rem" width="4rem" />
        <Actions>
          <IconButton>
            <DonutLargeIcon fontSize="large" />
          </IconButton>
          {/* <Marginer direction="horizontal" margin="0.2rem" /> */}
          <IconButton>
            <MessageIcon fontSize="large" />
          </IconButton>
          {/* <Marginer direction="horizontal" margin="0.2rem" /> */}
          <IconButton>
            <MoreVertIcon fontSize="large" />
          </IconButton>
        </Actions>
      </LinksDiv>
      <SearchInput placeholder="Search or start new chat" />
    </Navbar>
  );
}
