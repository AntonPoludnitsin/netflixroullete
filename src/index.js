import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './style.css';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

ReactDOM.render(
	<ErrorBoundary>
	<App />
	</ErrorBoundary>
	, document.getElementById('root'));
