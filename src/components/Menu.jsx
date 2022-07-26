import React from "react";
import styled from "styled-components";
import MTube from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={MTube} />
          YouTube
        </Logo>
        <Item>
          <HomeIcon />홈
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          탐색
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          구독
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          보관함
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          시청 기록
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Login>
        <Hr />
        <Title>탐색</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          음악
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          스포츠
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          게임
        </Item>
        <Item>
          <MovieOutlinedIcon />
          영화
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          뉴스
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          실시간
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          설정
        </Item>
        <Item>
          <FlagOutlinedIcon />
          신고 기록
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          고객센터
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          다크모드
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
