import React from 'react';

import {
  HeaderLogo,
  HeaderContent,
  HeaderTitle,
  HeaderToggle,
} from './Styles/HeaderStyles';

import '../../style.css';
import ToggleSearchButtons from './ToggleSearchButtons';
import Logo from './Logo';
import HeaderFormSearch from './HeaderFormSearch';

const HeaderSearch = ({ searchBy, setSearchBy }) => (
  <header className="header">
    <HeaderLogo>
      <Logo />
    </HeaderLogo>
    <HeaderContent>
      <h1 className="visually-hidden">Welcome to the netflixRoulette!</h1>
      <HeaderTitle>Find your movie</HeaderTitle>
      <HeaderFormSearch />
      <HeaderToggle>
        <ToggleSearchButtons
          title="Search by"
          leftButton="title"
          rightButton="genre"
          searchBy={searchBy}
          setSearchBy={setSearchBy}
        />
      </HeaderToggle>
    </HeaderContent>
  </header>
);

export default HeaderSearch;
