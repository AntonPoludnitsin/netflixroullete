import React from 'react';
import styled from "styled-components";

const LogoText = styled.p`
	color: #F65261;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 0;
   line-height: 24px;
	`;

const Span = styled.span`
	font-weight: 800;
`;


const Logo = () => {
	return (
		<>
			<LogoText className="logo__text"><Span>netflix</Span>roulette</LogoText>
		</>
	)
};
export default Logo;
