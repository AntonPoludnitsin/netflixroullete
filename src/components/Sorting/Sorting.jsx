import React from 'react';
import styled from 'styled-components';

import SortingCount from './SortingCount';
import SortingGenre from './SortingGenre';

export const SectionSorting = styled.section`
  background-color: #555555;
`;

export const SortingContent = styled.div`
  width: 960px;
  height: 70px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

const Sorting = ({ films }) => {
  return (
    <SectionSorting>
      <SortingContent>
        {films.length !== 0 ? (
          <SortingCount count={films.length} />
        ) : (
          <SortingGenre />
        )}
      </SortingContent>
    </SectionSorting>
  );
};

export default Sorting;
