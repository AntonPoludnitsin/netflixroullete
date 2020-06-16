import React from 'react';
import styled from 'styled-components';
import '../../style.css';

const ToggleTitle = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.89px;
  line-height: 19px;
  text-transform: uppercase;
  opacity: 0.8;
  margin-right: 20px;
`;

const ToggleSortingButtons = ({
  title,
  leftButton,
  rightButton,
  rating,
  sortByDate,
  sortByRating,
}) => {
  const isActiveLeftButton = !rating ? 'toggle-active' : '';
  const isActiveRightButton = rating ? 'toggle-active' : '';
  return (
    <>
      <ToggleTitle>{title}</ToggleTitle>
      <button
        className={`button toggle__button ${isActiveLeftButton}`}
        onClick={sortByDate}
      >
        {leftButton}
      </button>
      <button
        className={`button toggle__button ${isActiveRightButton}`}
        onClick={sortByRating}
      >
        {rightButton}
      </button>
    </>
  );
};

export default ToggleSortingButtons;
