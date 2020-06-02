import React from 'react';
import styled from 'styled-components';
import '../../style.css';

const HeaderForm = styled.form`
  height: 57px;
  display: flex;
  justify-content: space-between;
`;

const HeaderFormSearch = ({changeDefaultValue}) => {
  const takeValue = (e) => {
    changeDefaultValue(e.currentTarget.value);
  };
  return (
    <HeaderForm action="">
      <input
        type="text"
        className="form-search__input"
        placeholder="Search"
        onChange={takeValue}
      />
      <button type="submit" className="button form-search__button">
        Search
      </button>
    </HeaderForm>
  );
};

export default HeaderFormSearch;
