import React from 'react';

import {
  HeaderLogo,
  SearchImage,
  HeaderMovie,
  MovieImage,
  AboutMovie,
  MovieTop,
  MovieTitle,
  MovieRating,
  MovieGenre,
  MovieMiddle,
  MovieYear,
  MovieOverview
} from './Styles/DescriptionStyles';

import '../../style.css';
import Logo from './Logo';
import Icon from '../../images/red-icon.png';

const MovieDescription = ({ image, title, genres, year, description, rating }) => {
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
            <MovieRating>{rating}</MovieRating>
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
