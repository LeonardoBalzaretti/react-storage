import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import Loading from '../Loading/Loading';

class ProductList extends React.Component {
    render() {
        return (
            <div className="productList">
                {/* Timeline item */}
                {this.props.product.list.map((product) => {
                    return (
                        <Product product={product} key={product.name} />
                    );
                })}
                <Loading refreshing={this.props.refreshing} />
            </div>
        )
    };
}

function mapStateToProps(state, ownProps) {
    return {
        product: state.product
    }
}

export default connect(mapStateToProps)(ProductList);