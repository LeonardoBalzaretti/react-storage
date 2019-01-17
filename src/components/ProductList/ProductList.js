import React from 'react';
import Product from '../Product/Product';
import Loading from '../Loading/Loading';

class ProductList extends React.Component {
    render() {
        return (
            <div className="productList">
                {/* Timeline item */}
                {this.props.products.map((product) => {
                    return (
                        <Product product={product} key={product.name} />
                    );
                })}
                <Loading refreshing={this.props.refreshing} />
            </div>
        )
    };
}

export default ProductList;