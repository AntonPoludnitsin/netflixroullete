import React from 'react';
import styled from 'styled-components';

import SortingCount from './SortingCount';
import SortingGenre from './SortingGenre';

const SectionSorting = styled.section`
  background-color: #555555;
`;

const SortingContent = styled.div`
  width: 960px;
  height: 70px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

const Sorting = ({films}) => {
  return (
    <SectionSorting>
      <SortingContent>
        {true && <SortingCount count={films.length}/>}
        {false && <SortingGenre/>}
      </SortingContent>
    </SectionSorting>
  );
};

export default Sorting;
