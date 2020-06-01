import MovieDescription from './MovieDescription';
import HeaderSearch from './HeaderSearch';
import React from 'react';

const Header = ({ films }) => (
  <>
    {films.length !== 0 ? (
      <MovieDescription
        image={films[1].poster_path}
        title={films[2].title}
        genres={films[3].genres.join(', ')}
        year={films[4].release_date.slice(0, 4)}
        description={films[5].overview}
      />
    ) : (
      <HeaderSearch />
    )}
  </>
);

export default Header;
