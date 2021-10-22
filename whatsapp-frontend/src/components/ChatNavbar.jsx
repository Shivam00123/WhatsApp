import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Image from "../assets/DisplayPicture";
import ImageSrc from "../assets/Images/dp.png";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { removelocalstorage } from "../actions/localstorage";

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  transition: all 1s linear;
  cursor: pointer;
`;

const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const FriendName = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;
const LastSeen = styled.span`
  font-size: 1.3rem;
  word-wrap: break-word;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 1s linear;
`;
const InputBar = styled.input`
  border: none;
  border-bottom: 1px solid black;
  position: absolute;
  bottom: 0;
  margin: 0 20px;
  width: 60%;
  background: transparent;
  font-size: 1.5rem;

  &:focus {
    outline: none;
    font-size: 1.5rem;
  }
`;

const PopupMenu = styled.div`
  position: absolute;
  right: 2px;
  bottom: -7rem;
  z-index: 2;
  background-color: #7f8383;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const AllLinks = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0.2rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #d32a4c;
  }
`;

function ChatNavbar(props) {
  const [search, setSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleLogOut = () => {
    props.dispatch(removelocalstorage());
  };

  return (
    <Header>
      {openMenu ? (
        <PopupMenu>
          <AllLinks>New group</AllLinks>
          <AllLinks>Starred messages</AllLinks>
          <AllLinks>Settings</AllLinks>
          <AllLinks onClick={handleLogOut}>Log Out</AllLinks>
        </PopupMenu>
      ) : null}

      {search ? (
        <Left>
          <InputBar placeholder="search message" />
        </Left>
      ) : (
        <Left>
          <Image height="4rem" width="4rem" ImageUrl={ImageSrc} />
          <FriendInfo>
            <FriendName>John Wick</FriendName>
            <LastSeen>last seen yesterday 8:00pm</LastSeen>
          </FriendInfo>
        </Left>
      )}
      <Right>
        <IconButton>
          {search ? (
            <CloseIcon fontSize="large" onClick={() => setSearch(false)} />
          ) : (
            <SearchIcon fontSize="large" onClick={() => setSearch(true)} />
          )}
        </IconButton>
        <IconButton>
          <AttachFileIcon fontSize="large" />
        </IconButton>
        <IconButton>
          {openMenu ? (
            <CloseIcon fontSize="large" onClick={() => setOpenMenu(false)} />
          ) : (
            <MoreVertIcon fontSize="large" onClick={() => setOpenMenu(true)} />
          )}
        </IconButton>
      </Right>
    </Header>
  );
}
function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

export default connect(mapStateToProps)(ChatNavbar);
