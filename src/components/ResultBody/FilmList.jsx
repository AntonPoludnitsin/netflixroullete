import React from 'react';
import styled from 'styled-components';
import ContentBody from './ContentBody';

export const MoviesList = styled.section`
  background-color: #232323;
  padding: 72px 60px 20px;
`;

const FilmList = ({ films }) => {
  return (
    <MoviesList>
      <ContentBody
        films={films}
      />
    </MoviesList>
  );
};

export default FilmList;
