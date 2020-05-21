import React from 'react';
import '../../style.css';
import Logo from "./Logo";
import Icon from '../../images/red-icon.png';
import styled from "styled-components";

const SearchImage = styled.img`
	width: 25px;
	height: 25px;
	`;


const MovieDescription = ({image, title, genres, year, description}) => {
	return (
		<header className="header">
			<div className="header__logo">
				<Logo/>
				<a href="">
					<SearchImage src={Icon} alt="search link" className="search-image"/>
				</a>
			</div>
			<div className="header-movie">
				<img src={image} alt="poster of movie"
						 className="header-movie__image">
				</img>
				<div className="header-movie__about">
					<div className="header-movie__top">
						<h2 className="header-movie__title">
							{title}
						</h2>
						<div className="header-movie__rating">
							4.3
						</div>
					</div>
					<div className="header-movie__genre">
						{genres}
					</div>
					<div className={"header-movie__middle"}>
						<div
							className="header-movie__year">
							{year}
						</div>
						<div className="header-movie__duration">154 min</div>
					</div>
					<div className="header-movie__description">
						{description}
					</div>
				</div>
			</div>
		</header>
	)
};

export default MovieDescription;
