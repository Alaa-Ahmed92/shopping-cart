import React from 'react';
import '../../styles/Products/Products.css';

const Products = (props) => {
    return (
        <div className='productsWrapper'>
            {
                props.products.map(product => (
                    <div key={product.id} className='productItem'>
                        <div className='productImg'>
                            <img src={product.imageUrl} alt={product.title} />
                        </div>
                        <div className='productDesc'>
                            <h4>{product.title}</h4>
                            <span>${product.price}</span>
                        </div>
                        <button>Add To Cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products;