// ProductCard.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeProduct } from './actions'; 

const ProductCard = ({ product }) => {
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const dispatch = useDispatch();
    
    // 💡 FIX 1: Ensure product.price is converted to a number (float)
    const price = parseFloat(product.price); 
    const quantity = product.quantity;
    const subtotal = (price * quantity).toFixed(2);
    
    const descriptionLengthThreshold = 100;

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value) || 0;
        dispatch(updateQuantity(product.id, newQuantity));
    };

    const handleRemove = () => {
        dispatch(removeProduct(product.id));
    };

    return (
        <div className="product-card">
            <div className="product">
                
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>
                
                <div className="product-details">
                    <h3>{product.name}</h3>
                    <p className="category">{product.category}</p>
                    
                    <p 
                        className={`description ${isDescriptionExpanded ? 'expanded' : 'collapsed'}`}
                    >
                        {product.description}
                    </p>

                    {product.description && product.description.length > descriptionLengthThreshold && (
                        <button 
                            className="see-more-button"
                            onClick={() => setIsDescriptionExpanded(prev => !prev)}
                        >
                            {isDescriptionExpanded ? 'Show Less' : 'See More...'}
                        </button>
                    )}
                </div>
                
                <div className="product-actions">
                    <div className="quantityandprice">
                        <label className='quantity-label' htmlFor={`qty-${product.id}`}>
                            <select 
                                id={`qty-${product.id}`}
                                className='quantity-select'
                                value={quantity} 
                                onChange={handleQuantityChange}
                            >
                                {Array.from({ length: product.count + 1 }, (_, i) => (
                                    <option key={i} value={i}>
                                        Qty: {i}
                                    </option>
                                ))}
                            </select>
                        </label>
                        
                        {/* 💡 FIX 2: Use the converted 'price' variable */}
                        <p className="price">${price.toFixed(2)}</p>
                    </div>

                    <div className="subtotal-container">
                        <p className="subtotal-label">Subtotal:</p>
                        <p className="subtotalamount">${subtotal}</p>
                        
                        <button 
                            className="remove-button" 
                            onClick={handleRemove}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;