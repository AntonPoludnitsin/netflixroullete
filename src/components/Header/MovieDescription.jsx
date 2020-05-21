import React from 'react';
import '../../style.css';
import Logo from "./Logo";

const MovieDescription = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<Logo/>
			</div>
			<div className="header-movie">
				<div className="header-movie__image">
				</div>
				<div className="header-movie__about">
					<div className="header-movie__top">
						<h2 className="header-movie__title">
							Pulp Fiction
						</h2>
						<div className="header-movie__rating">
							4.3
						</div>
					</div>
					<div className="header-movie__genre">
						Oscar winning movie
					</div>
					<div className={"header-movie__middle"}>
						<div className="header-movie__year">1994</div>
						<div className="header-movie__duration">154 min</div>
					</div>
					<div className="header-movie__description">
						Pulp Fiction is a 1994 American crime film written
						and directed by Quentin Tarantino; it is based on a story
						by Tarantino and Roger Avary.[4] Starring John Travolta,
						Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and
						Uma Thurman, it tells several stories of criminal Los Angeles.
						The film's title refers to the pulp magazines and hardboiled crime
						novels popular during the mid-20th century, known for their graphic
						violence and punchy dialogue.
					</div>

				</div>


			</div>

		</header>
	)
};

export default MovieDescription;
