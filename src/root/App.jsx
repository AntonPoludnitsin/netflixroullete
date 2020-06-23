import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Footer from '../components/Footer';
import MainPage from './MainPage';
import ErrorPage from './ErrorPage';
import SearchPage from './SearchPage';
import SearchPageItem from './SearchPageItem';

export const Main = styled.main`
  width: 1200px;
  margin: 54px auto 0;
  color: white;
  box-shadow: 0 2px 34px 0 rgba(0, 0, 0, 0.27);
`;

const NO_FILMS_FOUND = 'No films found';
const PAGE_NOT_FOUND = '404! Page not found';

const App = ({ films }) => (
  <BrowserRouter>
    <Main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <MainPage title={NO_FILMS_FOUND} films={films} />}
        />
        <Route
          exact
          path="/search"
          render={() => <SearchPage films={films} />}
        />
        <Route
          path="/search/films/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <SearchPageItem films={films} filmIdx={id} />;
          }}
        />
        <Route path="*" render={() => <ErrorPage title={PAGE_NOT_FOUND} />} />
      </Switch>
      <Footer />
    </Main>
  </BrowserRouter>
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
