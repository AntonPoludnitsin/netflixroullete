import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header/Header';
import Sorting from './components/Sorting/Sorting';
import FilmList from './components/ResultBody/FilmList';
import Footer from './components/Footer';
import MovieDescription from './components/Header/MovieDescription';
import data from './mockadata.json';

const Main = styled.main`
  width: 1200px;
  margin: 54px auto 0;
  color: white;
  box-shadow: 0 2px 34px 0 rgba(0, 0, 0, 0.27);
`;

export class App extends Component {
  state = {
    films: data.films,
    filmItemSelected: false
  };

  render() {
    return (
      <Main>
        {this.state.filmItemSelected && <Header />}
        {!this.state.filmItemSelected && (
          <MovieDescription
            image={this.state.films[4].poster_path}
            title={this.state.films[4].title}
            genres={this.state.films[4].genres.join(', ')}
            year={this.state.films[4].release_date.slice(0, 4)}
            description={this.state.films[4].overview}
          />
        )}
        <Sorting films={this.state.films} />
        <FilmList films={this.state.films} />
        <Footer />
      </Main>
    );
  }
}
