import React from "react";
import SortingCount from "./SortinCount";
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
