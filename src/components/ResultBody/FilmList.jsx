import React from 'react';
import styled from 'styled-components';

import ContentBody from './ContentBody';
import EmptyContent from './EmptyContent';

const MoviesList = styled.section`
  background-color: #232323;
  padding: 72px 60px 20px;
`;

const FilmList = ({films}) => {
  return (
    <MoviesList>
      {true && <ContentBody films={films}/>}
      {false && <EmptyContent/>}
    </MoviesList>
  );
};

export default FilmList;
