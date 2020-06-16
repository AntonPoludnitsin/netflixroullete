import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Sorting from './Sorting';
import { sortByDate, sortByRating } from '../../redux/reducer';

export const SortingContent = styled.div`
  width: 960px;
  height: 70px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

const SortingContainer = (props) => <Sorting {...props} />;

const mapStateToProps = (state) => {
  return {
    films: state.films,
    searchBy: state.searchBy,
    genres: state.genres,
    rating: state.rating,
  };
};

export default connect(mapStateToProps, { sortByDate, sortByRating })(
  SortingContainer,
);
