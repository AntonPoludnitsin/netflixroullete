import React from 'react';

import HeaderSearchContainer from '../components/Header/HeaderSearchContainer';
import Sorting from '../components/Sorting/SortingContainer';
import FilmList from '../components/ResultBody/FilmList';


const SearchPage = ({ films }) => (
  <>
    <HeaderSearchContainer />
    <Sorting />
    <FilmList films={films} />
  </>
);

export default SearchPage;
