import React, {Component} from 'react';
import styled from "styled-components";

const Error = styled.div`
   color: gold;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    align-items: center;
    font-size: 25px;
`;

class ErrorBoundary extends Component {
	state = {
		hasError: false
	};

	componentDidCatch() {
		this.setState({hasError: true})
	}

	render() {
		if (this.state.hasError) {
			return <Error>
				<span>
					Something has gone terribly wrong
				</span>
				<span>
					(but we already going to fix it)
				</span>
			</Error>
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
