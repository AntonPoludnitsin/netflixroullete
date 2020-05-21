import ToggleButtons from "../ToggleButtons";
import React from "react";

const SortingCount = () => {
	return (
		<>
			<div className="sorting__count">
				7 movie found
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
