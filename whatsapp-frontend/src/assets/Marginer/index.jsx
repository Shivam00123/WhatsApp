import React from "react";
import styled from "styled-components";

const VerticalMargin = styled.span`
  height: ${({ margin }) =>
    typeof margin === "string" ? `${margin}` : `${margin}rem`};
`;

const HoriaontalMargin = styled.span`
  width: ${({ margin }) =>
    typeof margin === "string" ? `${margin}` : `${margin}rem`};
`;

export default function index(props) {
  const { direction } = props;
  if (direction === "vertical") return <VerticalMargin {...props} />;
  else {
    return <HoriaontalMargin {...props} />;
  }
}
