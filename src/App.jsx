// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import ProductCard from './ProductCard';
import { setProducts } from './actions'; // Import the setProducts action
import './App.css';
const App = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    // Fetch products from API and dispatch the action to set them in the Redux store
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();

                // Format the fetched data
                const formattedProducts = data.map(item => ({
                    id: item.id,
                    image: item.image,
                    name: item.title,
                    category: item.category,
                    rate: item.rating.rate,
                    count: item.rating.count,
                    description: item.description,
                    price: item.price.toFixed(2),
                    quantity: 0,
                }));
                dispatch(setProducts(formattedProducts)); // Dispatch action to set products
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();
    }, [dispatch]);

    return (
        <div>
            <Header />
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default App;

