// actions.js
export const setProducts = (products) => {
    return {
        type: 'SET_PRODUCTS',
        payload: products,
    };
};

export const updateQuantity = (productId, quantity) => {
    return {
        type: 'UPDATE_QUANTITY',
        payload: { productId, quantity },
    };
};

export const removeProduct = (productId) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: productId,
    };
};
