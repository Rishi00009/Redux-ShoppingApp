// Header.js
import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const totalQuantity = useSelector((state) => state.totalQuantity);
    const totalAmount = useSelector((state) => state.totalAmount);

    return (
        <header>
            <div className="head">Rishi Product Store</div>
            <div className="header-info">
                <p>Total Quantity: {totalQuantity}</p>
                <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            </div>
        </header>
    );
};

export default Header;
