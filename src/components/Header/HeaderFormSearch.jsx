import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import '../../style.css';
import {
  addGenres,
  deleteGenres,
  getMovies,
  getMoviesByGenre,
  getMoviesByTitle,
} from '../../redux/reducer';

const HeaderForm = styled.form`
  height: 57px;
  display: flex;
  justify-content: space-between;
`;

class HeaderFormSearch extends Component {
  state = {
    value: '',
  };

  changeValue = (e) => {
    this.setState({ value: e.currentTarget.value });
  };

  render() {
    const { searchBy, rating, getMoviesByTitle, getMoviesByGenre } = this.props;
    const { value } = this.state;

    const getFilms = (e) => {
      e.preventDefault();
      searchBy === 'title'
        ? getMoviesByTitle(searchBy, value, rating)
        : getMoviesByGenre(searchBy, value);
    };
    return (
      <HeaderForm action="" onSubmit={getFilms}>
        <input
          type="text"
          className="form-search__input"
          placeholder="Search"
          value={value}
          onChange={this.changeValue}
        />
        <button type="submit" className="button form-search__button">
          Search
        </button>
      </HeaderForm>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchBy: state.searchBy,
    rating: state.rating,
  };
};

export default connect(mapStateToProps, {
  getMovies,
  addGenres,
  deleteGenres,
  getMoviesByTitle,
  getMoviesByGenre,
})(HeaderFormSearch);
