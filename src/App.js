import React, { Component } from 'react';
import ProductList from './components/ProductList/ProductList'

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
			<ProductList products={this.state.products} refreshing={this.state.refreshing}></ProductList>
		)
	}
}

export default App;