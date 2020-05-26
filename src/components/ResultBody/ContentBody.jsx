import React from 'react';
import styled from 'styled-components';

import FilmItem from './FilmItem';

const FilmListContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ContentBody = ({ films }) => {
  const filmsList = films.map((item) => {
    return (
      <FilmItem
        key={item.id}
        title={item.title}
        year={item.release_date.slice(0, 4)}
        genres={item.genres.join(', ')}
        imageUrl={item.poster_path}
      />
    );
  });
  return <FilmListContent>{filmsList}</FilmListContent>;
};

export default ContentBody;
