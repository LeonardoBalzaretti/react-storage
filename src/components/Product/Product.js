import React, { Component } from 'react';
import Header from './Header/Header'
import Content from './Content/Content'

class Product extends Component {
	render() {
    return (
      <div className="product">
          <Header />
          <Content />
      </div>
    )
  }
}

export default Product;