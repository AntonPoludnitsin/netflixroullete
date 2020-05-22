import React from 'react';
import styled from "styled-components";

import '../../style.css';
import Logo from "./Logo";
import Icon from '../../images/red-icon.png';


const HeaderLogo = styled.div`
	padding-top: 20px;
  margin-left: 60px;
  margin-right: 38px;
  display: flex;
  justify-content: space-between;
`;
const SearchImage = styled.img`
	width: 25px;
	height: 25px;
`;
const HeaderMovie = styled.div`
	margin: 37px 60px 0 60px;
  display: flex;
`;
const MovieImage = styled.img`
	width: 279px;
  height: 394px;
  background-color: #f65261;
  margin-right: 60px;
  margin-bottom: 70px;
`;

const AboutMovie = styled.div`
	margin-top: 29px;
  display: flex;
  flex-direction: column;
  width: 672px;
  margin-bottom: 130px;
`;
const MovieTop = styled.div`
	display: flex;
  margin-bottom: 5px;
  opacity: 0.8;
`;
const MovieTitle = styled.h2`
	font-weight: 400;
  font-size: 52px;
  line-height: 63px;
  margin: 0 17px 0 0;
`;
const MovieRating = styled.div`
	width: 67px;
  height: 67px;
  color: #A1E66F;
  font-size: 26px;
  line-height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
`;
const MovieGenre = styled.div`
	opacity: 0.7;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  margin-bottom: 28px;
`;
const MovieMiddle = styled.div`
	display: flex;
  color: #f65261;
  font-size: 26px;
  line-height: 32px;
`;
const MovieYear = styled.div`
	margin-right: 30px;
`;
const MovieOverview = styled.div`
	margin-top: 23px;
  opacity: 0.8;
  font-family: "Open Sans";
  font-size: 17px;
  line-height: 22px;
`;

const MovieDescription = ({image, title, genres, year, description}) => {
	return (
		<header className="header">
			<HeaderLogo>
				<Logo/>
				<a href="">
					<SearchImage src={Icon} alt="search link"/>
				</a>
			</HeaderLogo>
			<HeaderMovie>
				<MovieImage src={image} alt="poster of movie"
				/>
				<AboutMovie>
					<MovieTop>
						<MovieTitle>
							{title}
						</MovieTitle>
						<MovieRating>
							4.3
						</MovieRating>
					</MovieTop>
					<MovieGenre>
						{genres}
					</MovieGenre>
					<MovieMiddle>
						<MovieYear>
							{year}
						</MovieYear>
						<div>
							154 min
						</div>
					</MovieMiddle>
					<MovieOverview>
						{description}
					</MovieOverview>
				</AboutMovie>
			</HeaderMovie>
		</header>
	)
};

export default MovieDescription;
