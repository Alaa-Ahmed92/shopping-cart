import React from 'react';
import Modal from 'react-modal';

export const CartModal = (props) => {
    const { user, cartItems, closeModal, showOrder } = props;
    return (
        <Modal isOpen={showOrder} onRequestClose={closeModal}>
            <div className='closeModal' onClick={closeModal}>&times;</div>
            <div>Order Done Successfully</div>
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>{cartItems.reduce((acc, p) => {
                            return acc + (p.qty * p.price)
                        }, 0)}</td>
                    </tr>
                    <tr>
                        <td>Selected Items:</td>
                        <td>{cartItems.map(product => (
                            <div key={product._id}>
                                <div>{product.title} {product.qty}</div>
                            </div>
                        ))}</td>
                    </tr>
                </tbody>
            </table>
        </Modal>
    )
}
