import React, { Component } from 'react';
import Product from './components/Product/Product'
import Loading from './components/Loading/Loading'

import './App.css';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = { refreshing: false };
	}

	// Callback from the `Content` component
	componentWillMount() {
		this.setState({ products: this.getData() });
		this.setState({ refreshing: true });
	}

	componentDidMount() {
		window.setTimeout(this.setData.bind(this), 1000);;
	}

	setData(){
		this.setState({ products: this.getData() });
		this.setState({ refreshing: false });
	}

	getData(){
		return require('./data.json').sort(() => 0.5 - Math.random());
	}

	render() {
		return (
			<div className="productList">
				{/* Timeline item */}
				{this.state.products.map((product) => {
					return (
						<Product product={product} key={product.name} />
					);
				})}
				<Loading refreshing={this.state.refreshing} />
			</div>
		)
	}
}

export default App;