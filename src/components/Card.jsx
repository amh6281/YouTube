import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Container>
      <Image src="https://user-images.githubusercontent.com/83646986/181151553-f588d882-f53d-4b8c-8ac6-6e75b55a8c86.JPG" />
      <Details>
        <ChannelImage src="https://user-images.githubusercontent.com/83646986/181155356-b8d3e000-467e-426a-afb3-af5c7348d3a4.JPG" />
        <Texts>
          <Title>Test Video</Title>
          <ChannelName>황튜브</ChannelName>
          <Info>조회수 35만회 • 18시간 전</Info>
        </Texts>
      </Details>
    </Container>
  );
};

export default Card;
