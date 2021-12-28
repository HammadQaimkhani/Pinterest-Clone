import React from "react";
import styled from "styled-components";
import PinterestIcon from "@material-ui/icons/Pinterest";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TextsmsIcon from "@material-ui/icons/Textsms";
import FaceIcon from "@material-ui/icons/Face";
import NotificationsIcon from "@material-ui/icons/Notifications";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useState } from "react";

function Header(props) {
  const [input, setInput] = useState("");

  const onSearchSubmit = e => {
    e.preventDefault();
    props.onSubmit(input);
    console.log(`This is ${input}`);
  };
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>

      <HomePageButton>
        <a href='/'>Homepage</a>
      </HomePageButton>
      <FollowingButton>
        <a href='/'>Following</a>
      </FollowingButton>
      <SearchWrapper>
        <SearchBarWrapper>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input type='text' onChange={e => setInput(e.target.value)} />
            <button type='submit ' onClick={onSearchSubmit}></button>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>
      <IconWrapper>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <FaceIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </IconWrapper>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  backgroung-color: #fff;
  color: black;
`;
const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    // when we use material ui icons we used this class to edit icons

    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;

const HomeButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`;

const HomePageButton = styled(HomeButton)`
  background-color: rgb(17, 17, 17);

  a {
    text-decoration: none;
    font-weight: 700;
    color: #fff;
  }
`;

const FollowingButton = styled(HomeButton)`
  background-color: white;
  a {
    text-decoration: none;
    font-weight: 700;
    color: #000;
  }
  :hover {
    background-color: #e1e1e1;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
`;

const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  padding-left: 10px;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;   
    width:100%
    font-size:16px
    margin-left:5px;
  }
  form > button{
    display:none;
  }
  input:focus{
    outline:none;
  }
`;

const IconWrapper = styled.div``;
