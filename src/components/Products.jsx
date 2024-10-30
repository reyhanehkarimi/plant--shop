/*eslint-disable*/
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/actionCreator";
import "../styles/products.css";

const productsData = [
  {
    type: "Plants",
    name: "Boncellensis Secullant",
    stars: 3,
    price: "34.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg",
  },
  {
    type: "Cactus",
    name: "Cleistocactus",
    stars: 2,
    price: "28.00",
    offPrice: "25.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus2-free-img.jpg",
  },
  {
    type: "Plants",
    name: "Green Soil Lotus",
    stars: 4,
    price: "54.50",
    offPrice: "34.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant5-free-img.jpg",
  },
  {
    type: "Plants",
    name: "Money Plant",
    stars: 5,
    price: "23.00",
    offPrice: "20.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant1-free-img.jpg",
  },
  {
    type: "Plants",
    name: "Old Lady Cactus",
    stars: 3,
    price: "15.00",
    offPrice: "12.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus4-free-img.jpg",
  },
  {
    type: "Plants",
    name: "Piorro Quisquam",
    stars: 3,
    price: "32.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant4-free-img.jpg",
  },
  {
    type: "Plants",
    name: "Rattle Snake Tail",
    stars: 1,
    price: "45.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant6-free-img.jpg",
  },
  {
    type: "Cactus",
    name: "Star Cacuts",
    stars: 2,
    price: "34.00",
    offPrice: "32.00",
    src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus6-free-img.jpg",
  },
];
function Products({ showAlertMessage }) { 
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const productQuantity = { ...product, quantity: 1 };
    dispatch(addToCart(productQuantity));

    showAlertMessage(" Planet added to basket shop!");
  };

  return (
    <div className="products-container">
      {productsData.map((product, index) => (
        <div key={index} className="product-card">
          <div className="image-container">
            <img src={product.src} alt={product.name} className="product-image" />
            <button 
              className="add-to-cart-icon" 
              onClick={() => handleAddToCart(product)} 
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>

          <div className="parent-data-of-products">
            <p>{product.type}</p>
            <h3 className="name-pro">{product.name}</h3>
            <p className="star">{"★".repeat(product.stars)}</p>
            {product.offPrice ? (
              <>
                <p className="price-of-product" style={{ textDecoration: 'line-through' }}>
                  {parseFloat(product.price).toFixed(2)} $
                </p>
                <p className="off-price-of-product">
                  {parseFloat(product.offPrice).toFixed(2)} $
                </p>
              </>
            ) : (
              <p className="price-of-product">
                {parseFloat(product.price).toFixed(2)} $
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Products;
