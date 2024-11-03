/*eslint-disable*/
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Products from "./components/Products";
import ShoppingCart from './components/ShoppingCart';
import CustomAlert from './components/AlertAddProduct'; 

function App() {
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const showAlertMessage = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
    
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <Router>
      <Header 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu}
      />
      <Routes>
        <Route 
          path="/" 
          element={<Products showAlertMessage={showAlertMessage} />} 
        />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      {showAlert && (
        <CustomAlert 
          message={alertMessage} 
          onClose={() => setShowAlert(false)} 
        />
      )}
    </Router>
  );
}

export default App;
