import React from 'react';
import "./Content.css";

class Content extends React.Component {
	render() {
		const {product} = this.props; // ES6 destructuring

		return (
			<div className="content">
				<div className="line"></div>

				{/* Timeline item */}
				<div className="item">
					<div className="image">
						<img
							alt={product.name}
							src={product.image} />
						</div>

					<span className="name">
						{product.name}
						</span>
					<p className="description">{product.description}</p>
					<div className="commentCount">
						2
					</div>
				</div>
			</div>
		)
	}
}

export default Content;