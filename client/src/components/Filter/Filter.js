import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts, getSize, getSort, filteredProducts } from '../../selectors/productsSelector';
import { sizeFilter, sortFilter } from '../../actions/filterActions';

class Filter extends Component {

    render() {
        const { productsList, sizeFilter, size, sort, filteredProducts, sortFilter } = this.props;
        return (
            <div className='filterWrapper'>
                <div className='filterHead'></div>
                <h5 className='productNumbers'>Number of products {filteredProducts && filteredProducts.length}</h5>
                <div className='sizeFilter'>
                    <span>Filter Size</span>
                    <select value={size} className='selectSizes' onChange={(e) => sizeFilter(productsList, e.target.value)}>
                        <option value="ALL">All</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
                <div className='sortFilter'>
                    <span>Sort</span>
                    <select value={sort} className='selectSort' onChange={(e) => sortFilter(filteredProducts, e.target.value)}>
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    productsList: getProducts(state),
    filteredProducts: filteredProducts(state),
    size: getSize(state),
    sort: getSort(state)
})

export default connect(mapStateToProps, { sizeFilter, sortFilter })(Filter);