import React from 'react';
import "./Header.css";

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<span className="title">{this.props.name}</span>
			</div>
		)
	}
}

export default Header;