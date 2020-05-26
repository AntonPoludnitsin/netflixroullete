import React from 'react';

import {
  MovieItem,
  MovieImage,
  AboutMovie,
  Description,
  Genres,
  ReleaseYear,
  Title,
} from './Styles/FilmItemStyles';

const FilmItem = ({ title, year, genres, imageUrl }) => {
  return (
    <MovieItem>
      <MovieImage src={imageUrl} alt="Poster of movie" />
      <AboutMovie>
        <Description>
          <Title>{title}</Title>
          <ReleaseYear>{year}</ReleaseYear>
        </Description>
        <Genres>{genres}</Genres>
      </AboutMovie>
    </MovieItem>
  );
};

export default FilmItem;
