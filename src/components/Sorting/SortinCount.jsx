import ToggleButtons from "../ToggleButtons";
import React from "react";

const SortingCount = ({count}) => {
	return (
		<>
			<div className="sorting__count">
				{count} movie found
			</div>
			<div className="sorting__toggle">
				<ToggleButtons title={"Sort by"}
											 leftButton={"Release date"}
											 rightButton={"Rating"}/>
			</div>
		</>
	)
};
export default SortingCount;
