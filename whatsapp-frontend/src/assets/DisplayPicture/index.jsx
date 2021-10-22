import React from "react";
import styled from "styled-components";

const ImageConatainer = styled.div`
  height: ${({ height }) =>
    typeof height === "string" ? `${height}` : `${height}rem`};
  width: ${({ width }) =>
    typeof width === "string" ? `${width}` : `${width}rem`};
  border-radius: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  line-height: 50px;
  margin: 20px;
  overflow: hidden;
`;

const Image = styled.img`
  height: 80%;
  width: 80%;
  object-fit: contain;
`;

export default function index(props) {
  const { ImageUrl } = props;
  return (
    <ImageConatainer {...props}>
      <Image src={ImageUrl} alt="DP" />
    </ImageConatainer>
  );
}
