import React from 'react';
import styled from 'styled-components';
import '../style.css';

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

const ToggleButtons = ({title, leftButton, rightButton}) => {
  return (
    <>
      <ToggleTitle>{title}</ToggleTitle>
      <button className={`button toggle__button toggle-active`}>
        {leftButton}
      </button>
      <button className={`button toggle__button`}>{rightButton}</button>
    </>
  );
};

export default ToggleButtons;
