import React from 'react';
import styled from 'styled-components';

import ToggleSortingButtons from './ToggleSortingButtons';

export const SortCount = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 19px;
`;

const SortingToggle = styled.div`
  display: flex;
  align-items: center;
`;

const SortingCount = ({ count, rating, sortByDate, sortByRating }) => (
  <>
    <SortCount>{count} movie found</SortCount>
    <SortingToggle>
      <ToggleSortingButtons
        title="Sort by"
        leftButton="Release date"
        rightButton="Rating"
        rating={rating}
        sortByDate={sortByDate}
        sortByRating={sortByRating}
      />
    </SortingToggle>
  </>
);

export default SortingCount;
