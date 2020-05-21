import React from "react";
import FilmItem from "./FilmItem";

const ContentBody = ({films}) => {
	const filmsList = films.map(item => {
		return <FilmItem key={item.id}
										 title={item.title}
										 year={item.release_date.slice(0, 4)}
										 genres={item.genres.join(", ")}
										 imageUrl={item.poster_path}/>
	});
	return (
		<div className={"filmList__content"}>
			{filmsList}
		</div>
	)
};

export default ContentBody;

