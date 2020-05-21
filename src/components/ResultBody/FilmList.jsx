import React from 'react';
import '../../style.css';
import ContentBody from './ContentBody';
import EmptyContent from './EmptyContent';

const FilmList = ({films}) => {
	return (
		<section className={"filmlist"}>
			{true && <ContentBody films={films}/>}
			{false && <EmptyContent/>}
		</section>
	)
};

export default FilmList;
