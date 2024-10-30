/*eslint-disable*/
import React from 'react';
import '../styles/alert.css'; 

const AlertAddProduct = ({ message }) => {
  return (
    <div className="custom-alert">
      <p>{message}</p>
    </div>
  );
};

export default AlertAddProduct;
