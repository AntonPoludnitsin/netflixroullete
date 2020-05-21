import React from "react";
import SortingCount from "./SortingCount";
import SortingGenre from "./SortingGenre";

const Sorting = ({films}) => {
	return (
		<section className="sorting">
			<div className="sorting__content">
				{true && <SortingCount count={films.length}/>}
				{false && <SortingGenre />}
			</div>
		</section>
	);
};

export default Sorting;
