import React, { useState } from "react";



const Card = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div
            style={{
                ...cardStyles.container,
                border: isHovered ? "2px solid #007bff" : "1px solid #ccc",
                boxShadow: isHovered
                    ? "0 5px 15px rgba(0,0,0,0.3)"
                    : "0 3px 6px rgba(0,0,0,0.1)",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease", 
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <img
                src={product.image}
                alt={product.title}
                style={cardStyles.image}
            />
            <div style={cardStyles.details}>
                <div>
                    <p style={cardStyles.category}>{product.category}</p>
                    <h2 style={cardStyles.title}>{product.title}</h2>
                </div>
                <div style={cardStyles.subDetails}>
                    <p style={cardStyles.price}>${product.price}</p>
                    <button
                        style={{
                            ...cardStyles.button,
                            backgroundColor: isHovered ? "#0056b3" : "#007bff", 
                        }}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

const cardStyles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        margin: "15px",
        border: "1px solid #ccc", 
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        flex: "1 1 300px",
        fontFamily: "Arial",
        paddingTop: "10px",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease", 
        height: 350
    },
    image: {
        width: "100%",
        height: "150px",
        objectFit: "contain",
    },
    details: {
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
        flex: "1 1 auto",
        width: "100%",
        boxSizing: "border-box",
    },
    subDetails: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        width: "100%",
    },
    category: {
        fontSize: "12px",
        color: "#777",
        textAlign: "left",
    },
    title: {
        fontSize: "16px",
        margin: "10px 0",
        color: "#333",
        textAlign: "left",
    },
    price: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#000",
    },
    button: {
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        padding: "8px 15px",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "10px",
        transition: "background-color 0.3s ease",
    },
};

export default Card;
