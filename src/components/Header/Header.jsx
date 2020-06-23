import React from 'react';

import MovieDescription from './MovieDescription';

const Header = ({ films, filmIdx }) => (
  <MovieDescription
    image={films[filmIdx].poster_path}
    title={films[filmIdx].title}
    genres={films[filmIdx].genres.join(', ')}
    year={films[filmIdx].release_date.slice(0, 4)}
    description={films[filmIdx].overview}
    rating={films[filmIdx].vote_average}
  />
);

export default Header;
