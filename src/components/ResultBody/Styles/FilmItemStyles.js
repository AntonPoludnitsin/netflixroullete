import styled from 'styled-components';

export const MovieItem = styled.div`
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  letter-spacing: 0;
  margin-bottom: 50px;
  cursor: pointer;
`;

export const MovieImage = styled.img`
  display: block;
  background-color: antiquewhite;
  width: 320px;
  height: 455px;
  margin-bottom: 20px;
`;

export const AboutMovie = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.7;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Title = styled.div`
  width: 230px;
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  line-height: 22px;
`;

export const ReleaseYear = styled.div`
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

export const Genres = styled.div`
  width: 270px;
  display: flex;
  flex-wrap: wrap;
`;
