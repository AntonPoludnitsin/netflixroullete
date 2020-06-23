import React from 'react';

import Header from '../components/Header/Header';
import Sorting from '../components/Sorting/SortingContainer';
import { MoviesList } from '../components/ResultBody/FilmList';
import ContentBody from '../components/ResultBody/ContentBody';

const SearchPageItem = ({ films, filmIdx }) => (
  <>
    <Header films={films} filmIdx={filmIdx} />
    <Sorting />
    <MoviesList>
      <ContentBody films={films} />
    </MoviesList>
  </>
);

export default SearchPageItem;
