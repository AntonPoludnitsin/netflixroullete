import React from 'react';

import { HeaderLogo } from './Styles/DescriptionStyles';
import { SearchImage } from './Styles/DescriptionStyles';
import { HeaderMovie } from './Styles/DescriptionStyles';
import { MovieImage } from './Styles/DescriptionStyles';
import { AboutMovie } from './Styles/DescriptionStyles';
import { MovieTop } from './Styles/DescriptionStyles';
import { MovieTitle } from './Styles/DescriptionStyles';
import { MovieRating } from './Styles/DescriptionStyles';
import { MovieGenre } from './Styles/DescriptionStyles';
import { MovieMiddle } from './Styles/DescriptionStyles';
import { MovieYear } from './Styles/DescriptionStyles';
import { MovieOverview } from './Styles/DescriptionStyles';

import '../../style.css';
import Logo from './Logo';
import Icon from '../../images/red-icon.png';

const MovieDescription = ({ image, title, genres, year, description }) => {
  return (
    <header className="header">
      <HeaderLogo>
        <Logo />
        <a href="">
          <SearchImage src={Icon} alt="search link" />
        </a>
      </HeaderLogo>
      <HeaderMovie>
        <MovieImage src={image} alt="poster of movie" />
        <AboutMovie>
          <MovieTop>
            <MovieTitle>{title}</MovieTitle>
            <MovieRating>4.3</MovieRating>
          </MovieTop>
          <MovieGenre>{genres}</MovieGenre>
          <MovieMiddle>
            <MovieYear>{year}</MovieYear>
            <div>154 min</div>
          </MovieMiddle>
          <MovieOverview>{description}</MovieOverview>
        </AboutMovie>
      </HeaderMovie>
    </header>
  );
};

export default MovieDescription;
