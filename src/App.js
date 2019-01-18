import React, { Component } from 'react';
import ProductList from './components/ProductList/ProductList'

import './App.css';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = { refreshing: false };
	}

	render() {
		return (
			<ProductList></ProductList>
		)
	}
}

export default App;