import React from 'react';
import Modal from 'react-modal';

const ProductModal = (props) => {
    const { product, closeModal } = props;
    return (
        <Modal isOpen={!!product} onRequestClose={closeModal}>
            <div key={product._id} className='productItem'>
                <div className='closeIcon' onClick={closeModal}>&times;</div>
                <div className='productImg'>
                    <a href="#">
                        <img src={product.imageUrl} alt={product.title} />
                    </a>
                </div>
                <div className='productDesc'>
                    <h4>{product.title}</h4>
                    <span>${product.price}</span>
                </div>
                <button>Add To Cart</button>
            </div>
        </Modal>
    )
}

export default ProductModal;