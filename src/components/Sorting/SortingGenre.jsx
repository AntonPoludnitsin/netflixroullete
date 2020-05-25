import React from 'react';
import styled from 'styled-components';

const SortGenre = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 19px;
`;

const SortingGenre = () => {
  return <SortGenre>Films by Drama genre</SortGenre>;
};

export default SortingGenre;
