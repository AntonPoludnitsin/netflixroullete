import React from 'react';
import styled from 'styled-components';

export const WithoutContent = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  opacity: 0.8;
  font-size: 52px;
  letter-spacing: 0;
  line-height: 63px;
  padding: 159px 0 247px;
`;

const EmptyContent = ({ title }) => {
  return <WithoutContent data-cy="title">{title}</WithoutContent>;
};

export default EmptyContent;
