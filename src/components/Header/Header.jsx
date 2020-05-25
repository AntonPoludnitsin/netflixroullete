import React, {Component} from "react";
import styled from "styled-components";

import ToggleButtons from "../ToggleButtons";
import Logo from "./Logo";
import HeaderFormSearch from "./HeaderFormSearch";

const HeaderLogo = styled.div`
	padding-top: 20px;
  margin-left: 60px;
  margin-right: 38px;
  display: flex;
  justify-content: space-between;
`;
const HeaderContent = styled.div`
	width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const HeaderTitle = styled.h2`
	color: white;
  line-height: 49px;
  font-size: 40px;
  font-weight: 300;
  justify-content: center;
  margin-top: 57px;
  margin-bottom: 38px;
  text-transform: uppercase;
`;
const HeaderToggle = styled.div`
	margin-top: 13px;
  margin-bottom: 103px;
  display: flex;
  align-items: baseline;
`;

class Header extends Component {
  render() {
    return (
      <header className="header">
        <HeaderLogo>
          <Logo/>
        </HeaderLogo>
        <HeaderContent>
          <h1 className="visually-hidden">Welcome to the netflixRoulette!</h1>
          <HeaderTitle>Find your movie</HeaderTitle>
          <HeaderFormSearch/>
          <HeaderToggle>
            <ToggleButtons title={"Search by"}
                           leftButton={"title"}
                           rightButton={"genre"}/>
          </HeaderToggle>

        </HeaderContent>
      </header>
    )
  }
}

export default Header;

