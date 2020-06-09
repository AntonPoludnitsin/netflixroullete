import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Sorting from './components/Sorting/SortingContainer';
import FilmList from './components/ResultBody/FilmList';
import Footer from './components/Footer';
import Header from './components/Header/Header';

export const Main = styled.main`
  width: 1200px;
  margin: 54px auto 0;
  color: white;
  box-shadow: 0 2px 34px 0 rgba(0, 0, 0, 0.27);
`;

const App = ({ films }) => (
  <Main>
    <Header films={films} />
    <Sorting />
    <FilmList films={films} />
    <Footer />
  </Main>
);

const mapStateToProps = (state) => {
  return {
    films: state.films,
    searchBy: state.searchBy,
    genres: state.genres,
    rating: state.rating,
  };
};
export default connect(mapStateToProps, null)(App);
