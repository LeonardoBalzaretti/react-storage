import React from 'react';
import "./Content.css";

class Content extends React.Component {
	render() {
		return (
			<div className="content">
				<div className="line"></div>

				{/* Timeline item */}
				<div className="item">
					<div className="image">
						<img
							alt='Doug'
							src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
						</div>

					<span className="name">
						Product X
						</span>
					<p className="description">Ate lunch</p>
					<div className="commentCount">
						2
					</div>
				</div>
			</div>
		)
	}
}

export default Content;