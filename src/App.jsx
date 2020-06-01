import React, { Component } from 'react';
import styled from 'styled-components';

import Sorting from './components/Sorting/Sorting';
import FilmList from './components/ResultBody/FilmList';
import Footer from './components/Footer';
import data from './mockadata.json';
import Header from './components/Header/Header';

export const Main = styled.main`
  width: 1200px;
  margin: 54px auto 0;
  color: white;
  box-shadow: 0 2px 34px 0 rgba(0, 0, 0, 0.27);
`;

export class App extends Component {
  state = {
    films: data.films,
    filmItemSelected: false,
  };

  render() {
    return (
      <Main>
        <Header films={this.state.films} />
        <Sorting films={this.state.films} />
        <FilmList films={this.state.films} />
        <Footer />
      </Main>
    );
  }
}
