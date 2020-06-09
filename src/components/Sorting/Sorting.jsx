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

const Sorting = ({
  searchBy,
  films,
  genres,
  rating,
  sortByDate,
  sortByRating,
}) => {
  return (
    <SectionSorting>
      <SortingContent>
        {searchBy === 'title' ? (
          <SortingCount
            count={films.length}
            rating={rating}
            sortByDate={sortByDate}
            sortByRating={sortByRating}
          />
        ) : (
          <SortingGenre genres={genres} />
        )}
      </SortingContent>
    </SectionSorting>
  );
};

export default Sorting;
