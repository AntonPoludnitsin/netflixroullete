import React, {Component} from "react";
import ToggleButtons from "../ToggleButtons";
import Logo from "./Logo";

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="header__logo">
					<Logo/>
				</div>
				<div className="header__content">
					<h1 className="visually-hidden">Welcome to the netflixRoulette!</h1>
					<h2 className="header__title">Find your movie</h2>

					<div className="header__form">
						<form action="" className="form-search">
							<input type="text" className="form-search__input"
										 placeholder="Search"/>
							<button type="submit"
											className="button form-search__button">Search
							</button>
						</form>
					</div>

					<div className="header__toggle">
						<ToggleButtons title={"Search by"}
													 leftButton={"title"}
													 rightButton={"genre"}/>
					</div>
				</div>
			</header>
		)
	}
};

export default Header;

