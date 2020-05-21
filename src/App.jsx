import React from 'react';
import './style.css'
import Header from "./components/Header/Header";
import Sorting from "./components/Sorting/Sorting";
import FilmList from "./components/ResultBody/FilmList";
import Footer from "./components/Footer";
import MovieDescription from "./components/Header/MovieDescription";


export const App = (props) => {
	return (
		<div className={'main'}>
			{false && <Header />}
			{true && <MovieDescription />}
			<Sorting />
			<FilmList />
			<Footer />
		</div>
	)
};
