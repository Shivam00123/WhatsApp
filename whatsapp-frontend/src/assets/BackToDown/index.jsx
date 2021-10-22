import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";

const ButtonContainer = styled.div`
  width: 4rem;
  height: 5rem;
  background-color: gray;
  border-radius: 50%;
  margin-left: auto;
  position: sticky;
  bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function index() {
  return (
    <ButtonContainer>
      <IconButton>
        <KeyboardArrowDownIcon />
      </IconButton>
    </ButtonContainer>
  );
}
