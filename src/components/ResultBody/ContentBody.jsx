import React from 'react';
import styled from 'styled-components';

import FilmItem from './FilmItem';
import { withRouter } from 'react-router-dom'

export const FilmListContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ContentBody = ({ films, history }) => {
  const filmsList = films.map((item, index ) => {
    return (
      <FilmItem
        index={index}
        key={item.id}
        title={item.title}
        year={item.release_date.slice(0, 4)}
        genres={item.genres.join(', ')}
        imageUrl={item.poster_path}
        getFilmId={(id) => history.push(`/search/films/${id}`)}
      />
    );
  });

  return <FilmListContent>{filmsList}</FilmListContent>
  
  
};

export default withRouter(ContentBody);
