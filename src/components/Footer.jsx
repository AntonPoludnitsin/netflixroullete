import React from 'react';
import '../style.css'
import Logo from "./Header/Logo";
import styled from "styled-components";

const FooterContent = styled.footer`
	background-color: #424242;
    height: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
	`;

const Footer = () => {
	return (
		<FooterContent>
			<Logo/>
		</FooterContent>
	)
};

export default Footer;
