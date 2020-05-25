import React from 'react';
import ToggleButtons from '../ToggleButtons';
import styled from 'styled-components';

const SortCount = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 19px;
`;

const SortingToggle = styled.div`
  display: flex;
  align-items: center;
`;

const SortingCount = ({count}) => {
  return (
    <>
      <SortCount>{count} movie found</SortCount>
      <SortingToggle>
        <ToggleButtons
          title={'Sort by'}
          leftButton={'Release date'}
          rightButton={'Rating'}
        />
      </SortingToggle>
    </>
  );
};
export default SortingCount;
