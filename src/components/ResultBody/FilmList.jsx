import React from 'react';
import ContentBody from './ContentBody';
import EmptyContent from './EmptyContent';
import styled from "styled-components";

const MovieLists = styled.section`
	background-color: #232323;
    padding: 72px 60px 20px;
	`;

const FilmList = ({films}) => {
	return (
		<MovieLists>
			{true && <ContentBody films={films}/>}
			{false && <EmptyContent/>}
		</MovieLists>
	)
};

export default FilmList;
