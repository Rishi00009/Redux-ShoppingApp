// ProductCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeProduct } from './actions'; // Import the actions

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleQuantityChange = (e) => {
        const quantity = parseInt(e.target.value) || 0;
        dispatch(updateQuantity(product.id, quantity)); // Dispatch the action
    };

    return (
        <div className="product-card">
            <div className='product'>
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-details">
                    <h3>{product.name}</h3>
                    <p className='category'>{product.category}</p>
                    <p className='description'>{product.description}</p>
                </div>
                <div className="product-actions">
                    <div className='quantityandprice'>
                        <label className='quantity'>
                            <select style={{ color: 'brown' }} value={product.quantity} onChange={handleQuantityChange}>
                                {Array.from({ length: product.count + 1 }, (_, i) => (
                                    <option key={i} value={i}>
                                        {i}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <p className='price'>Price: ${product.price}</p>
                    </div>
                </div>
                <div className='subtotal-container'>
                    <p className='subtotal'>SubTotal</p>
                    <p className='subtotalamount'>${(product.price * product.quantity).toFixed(2)}</p>
                    <button className='remove-button' onClick={() => dispatch(removeProduct(product.id))} style={{ backgroundColor: '', color: 'white' }}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
