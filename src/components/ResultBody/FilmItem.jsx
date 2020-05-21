import React from 'react';

const FilmItem = ({title, year, genres, imageUrl}) => {
	return (
		<div className="film-item">
			<img src={imageUrl} className="film-item__image">
			</img>
			<div className="film-item__intro">
				<div className={"film-item__description"}>
					<div className={"film-item__title"}>{title}</div>
					<div className={"film-item__year"}>{year}</div>
				</div>
				<div className="film-item__genre">
					{genres}
				</div>
			</div>


		</div>
	)
};

export default FilmItem;
