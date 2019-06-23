import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./payments";

class Header extends React.Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return "";
			case false:
				return (
					<div>
						<li>
							<a href="/auth/google">login with google</a>
						</li>
						<li>
							<a href="/auth/twitter">login with twitter</a>
						</li>
					</div>
				);
			default:
				return [
					<li>
						<Payments />
					</li>,
					<li className="ml-3">your credits: {this.props.auth.credits}</li>,
					<li>
						<a href="/api/logout">logout</a>
					</li>
				];
		}
	}

	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper pl-5">
						<Link
							to={this.props.auth ? "/surveys" : "/"}
							className="brand-logo">
							Emaily
						</Link>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							{this.renderContent()}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(Header);
