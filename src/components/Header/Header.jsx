import React from 'react';
import MovieDescription from './MovieDescription';
import HeaderSearch from './HeaderSearch';

const Header = ({ films, changeDefaultValue }) => (
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
      <HeaderSearch changeDefaultValue={changeDefaultValue} />
    )}
  </>
);

export default Header;
