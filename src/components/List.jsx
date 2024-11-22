import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Card from "./Card";


const List = () => {
    const { items, loading } = useContext(ProductContext);
    if (loading) return <p style={{ textAlign: "center" }}>Загрузка данных...</p>;

    return (
        <div style={listStyles}>
        {items.map((item) => (
            <Card key={item.id} product={item} />
        ))}
        </div>
    );
};

const listStyles = {
    display: "flex",
    flexWrap: 'wrap',
    maxWidth: 1400,
    margin: "0 auto",
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    padding: "20px",
};

export default List;
