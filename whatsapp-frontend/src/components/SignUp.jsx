import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContentDiv from "./ContentDiv";

const OuterDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: slategray;
  display: grid;
  place-items: center;
`;

const InnerDiv = styled.div`
  width: 80%;
  height: 80%;
  background: linear-gradient(90deg, #f81a1a 50%, #fff 10%);
  border-radius: 10px;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
  position: relative;
  display: grid;
  place-items: center; ;
`;

const Title = styled.span`
  position: absolute;
  top: 10px;
  left: 20px;
  font-weight: bold;
  font-size: 1.6rem;
  color: #fff;
  font-family: Verdana;
`;

export default function SignUp() {
  return (
    <OuterDiv>
      <InnerDiv>
        <Title>WhatsApp</Title>
        <ContentDiv />
      </InnerDiv>
    </OuterDiv>
  );
}
