import React, { useState } from "react";
import styled from "styled-components";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import axios from "../axios.js";

const InputConatiner = styled.div`
  width: 98%;
  /* background-color: #f1e8e8; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Emoji = styled.div`
  display: flex;
  align-items: center;
  flex: 0;
`;

const InputBox = styled.input`
  flex: 1;
  border-radius: 20px;
  height: 1.2rem;
  border: none;
  text-align: left;
  padding: 1.5rem;
  font-size: 1.3rem;
  border: 1px solid lightgray;
`;

const ButtonContainer = styled.div`
  flex: 0;
  border-radius: 50%;
  background-color: #0fe40f;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export default function MessageInput() {
  const [message, setMessage] = useState("");

  const handleSubmitOnEnter = (e) => {
    if (e.key === "Enter") {
      axios.post("/messages/new", {
        name: "shivam",
        message: message,
        timeStamp: new Date().toUTCString(),
        received: false,
      });
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/messages/new", {
      name: "shivam",
      message: message,
      timeStamp: new Date().toUTCString(),
      received: false,
    });
    setMessage("");
  };

  return (
    <InputConatiner>
      <Emoji>
        <IconButton>
          <EmojiEmotionsIcon
            fontSize="large"
            style={{
              color: "#ffbf00",
            }}
          />
        </IconButton>
      </Emoji>
      <InputBox
        onKeyPress={handleSubmitOnEnter}
        placeholder="imessage"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {message && (
        <ButtonContainer style={{ color: "#fff" }}>
          <IconButton onClick={handleSubmit}>
            <SendIcon />
          </IconButton>
        </ButtonContainer>
      )}
    </InputConatiner>
  );
}
