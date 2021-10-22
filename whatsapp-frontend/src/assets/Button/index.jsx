import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";

const ButtonConatiner = styled.div`
  width: ${({ width }) =>
    typeof width === "string" ? `${width}` : `${width}rem`};
  height: ${({ height }) =>
    typeof height === "string" ? `${height}` : `${height}rem`};
  background-color: #00af9c;
  color: #fff;
  padding: 2rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-shadow: 1px 1px lightgray;
  border-radius: 5px;
  cursor: pointer;
`;

export default function index(props) {
  return (
    <IconButton>
      <ButtonConatiner {...props}>{props.children}</ButtonConatiner>
    </IconButton>
  );
}
