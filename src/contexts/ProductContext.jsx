import React, { createContext, useState, useEffect } from "react";



export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                setItems(data);
            } catch (e) {
                console.error("Error loading data", e);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ items, loading }}>
        {children}
        </ProductContext.Provider>
    );
};
