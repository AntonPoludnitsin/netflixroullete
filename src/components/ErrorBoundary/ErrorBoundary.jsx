import React, {Component} from 'react';

class ErrorBoundary extends Component {
	state = {
		hasError: false
	};

	componentDidCatch() {
		this.setState({hasError: true})
	}

	render() {
		if (this.state.hasError) {
			return <div className={"error"}>
				<span >
					Something has gone terribly wrong
				</span>
				<span >
					(but we already going to fix it)
				</span>
			</div>
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
