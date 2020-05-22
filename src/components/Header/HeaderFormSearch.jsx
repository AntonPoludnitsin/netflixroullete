import React from "react";
import styled from "styled-components";
import '../../style.css'

const HeaderForm = styled.form`
	height: 57px;
  display: flex;
  justify-content: space-between;
`;

const HeaderFormSearch = () => {
	return (
		<HeaderForm action="">
			<input type="text" className="form-search__input"
						 placeholder="Search"/>
			<button type="submit"
							className="button form-search__button">Search
			</button>
		</HeaderForm>
	)
};

export default HeaderFormSearch;
