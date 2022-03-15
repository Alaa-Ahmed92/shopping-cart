import React, { Component } from 'react';

class Filter extends Component {

    render() {
        const { products, handleChangeSize, size, sort, handleChangeSort } = this.props;
        return (
            <div className='filterWrapper'>
                <div className='filterHead'></div>
                <h5 className='productNumbers'>Number of products {products.length}</h5>
                <div className='sizeFilter'>
                    <span>Filter Size</span>
                    <select value={size} className='selectSizes' onChange={handleChangeSize}>
                        <option value="ALL">All</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
                <div className='sortFilter'>
                    <span>Sort</span>
                    <select value={sort} className='selectSort' onChange={handleChangeSort}>
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Filter;