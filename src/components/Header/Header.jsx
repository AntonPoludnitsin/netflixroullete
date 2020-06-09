import React from 'react';

import MovieDescription from './MovieDescription';
import HeaderSearchContainer from './HeaderSearchContainer';

const Header = ({ films }) => (
  <>
    {/*
      <MovieDescription
        image={films[2].poster_path}
        title={films[2].title}
        genres={films[2].genres.join(', ')}
        year={films[2].release_date.slice(0, 4)}
        description={films[2].overview}
        rating={films[2].vote_average}
      />
      */}
    <HeaderSearchContainer />
  </>
);

export default Header;
