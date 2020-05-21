import React from 'react';
import '../../style.css';
import ContentBody from './ContentBody';
import EmptyContent from './EmptyContent';

const FilmList = (props) => {
	return (
		<section className={"filmlist"}>
			{true && <ContentBody/>}
			{false && <EmptyContent/>}
		</section>
	)
};

export default FilmList;
