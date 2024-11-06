// store.js
import { createStore } from 'redux';

// Sample initial state
const initialState = {
    products: [],
    totalQuantity: 0,
    totalAmount: 0,
};

// Reducer function
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                totalQuantity: action.payload.reduce((sum, product) => sum + product.quantity, 0),
                totalAmount: action.payload.reduce((sum, product) => sum + product.price * product.quantity, 0),
            };
        case 'UPDATE_QUANTITY': {
            const { productId, quantity } = action.payload;
            const updatedProducts = state.products.map((product) =>
                product.id === productId ? { ...product, quantity } : product
            );
            return {
                ...state,
                products: updatedProducts,
                totalQuantity: updatedProducts.reduce((sum, product) => sum + product.quantity, 0),
                totalAmount: updatedProducts.reduce((sum, product) => sum + product.price * product.quantity, 0),
            };
        }
        case 'REMOVE_PRODUCT': {
            const updatedProducts = state.products.filter((product) => product.id !== action.payload);
            return {
                ...state,
                products: updatedProducts,
                totalQuantity: updatedProducts.reduce((sum, product) => sum + product.quantity, 0),
                totalAmount: updatedProducts.reduce((sum, product) => sum + product.price * product.quantity, 0),
            };
        }
        default:
            return state;
    }
};

// Create the Redux store
const store = createStore(productReducer);

export default store;
