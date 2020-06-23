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

const FilmItem = ({ index, title, year, genres, imageUrl, getFilmId }) => {
  return (
    <MovieItem onClick={() => getFilmId(index)}>
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
