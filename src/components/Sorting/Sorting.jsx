import React from "react";
import SortingCount from "./SortinCount";
import SortingGenre from "./SortingGenre";

const Sorting = () => {
	return (
		<section className="sorting">
			<div className="sorting__content">
				{true && <SortingCount />}
				{false && <SortingGenre />}
			</div>
		</section>
	);
};

export default Sorting;
