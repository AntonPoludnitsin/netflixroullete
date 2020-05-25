import React from 'react';
import styled from 'styled-components';

const MovieItem = styled.div`
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  letter-spacing: 0;
  margin-bottom: 50px;
`;

const MovieImage = styled.img`
  background-color: antiquewhite;
  width: 320px;
  height: 455px;
  margin-bottom: 20px;
`;

const AboutMovie = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.7;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Title = styled.div`
  width: 230px;
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  line-height: 22px;
`;

const ReleaseYear = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  height: 26px;
  width: 66px;
  border: 1px solid #555555;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 18px;
`;

const Genres = styled.div`
  width: 270px;
  display: flex;
  flex-wrap: wrap;
`;

const FilmItem = ({title, year, genres, imageUrl}) => {
  return (
    <MovieItem>
      <MovieImage src={imageUrl} alt={'Poster of movie'}/>
      <AboutMovie>
        <Description>
          <Title>{title}</Title>
          <ReleaseYear>{year}</ReleaseYear>
        </Description>
        <Genres>{genres}</Genres>
      </AboutMovie>
    </MovieItem>
  );
};

export default FilmItem;
