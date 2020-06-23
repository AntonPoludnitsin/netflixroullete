import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const TextLogo = styled.p`
  color: #f65261;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
`;

const Span = styled.span`
  font-weight: 800;
`;

const Logo = () => (
  <Link to='/'>
    <TextLogo className="logo__text">
      <Span>netflix</Span>roulette
    </TextLogo>
  </Link>
);
export default Logo;
