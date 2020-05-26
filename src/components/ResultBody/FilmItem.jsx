import React from 'react';

import { MovieItem } from './Styles/FilmItemStyles';
import { MovieImage } from './Styles/FilmItemStyles';
import { AboutMovie } from './Styles/FilmItemStyles';
import { Description } from './Styles/FilmItemStyles';
import { Title } from './Styles/FilmItemStyles';
import { ReleaseYear } from './Styles/FilmItemStyles';
import { Genres } from './Styles/FilmItemStyles';

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
