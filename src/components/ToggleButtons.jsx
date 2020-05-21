import React from 'react';
import '../style.css'

const ToggleButtons = ({title, leftButton, rightButton}) => {
	return (
		<>
			<p className={'toggle__title'}>{title}</p>
			<button className={`button toggle__button toggle-active`}>
				{leftButton}
			</button>
			<button className={`button toggle__button`}>
				{rightButton}
			</button>
		</>
	)
};

export default ToggleButtons;
