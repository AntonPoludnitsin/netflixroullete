import React from 'react';
import styled from 'styled-components';
import ContentBody from './ContentBody';

const MoviesList = styled.section`
  background-color: #232323;
  padding: 72px 60px 20px;
`;

const FilmList = ({ films, emptyValue }) => {
  return (
    <MoviesList>
      <ContentBody
        films={films}
        emptyValue={emptyValue}
      />
    </MoviesList>
  );
};

export default FilmList;
