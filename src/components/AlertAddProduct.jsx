
/*eslint-disable*/
import React, { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { hideAlert } from '../redux/actions/actions';

function AlertAddProduct() {
  const dispatch = useDispatch();
  const showAlert = useSelector(state => state.cart.showAlert);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showAlert, dispatch]);

  return (
    <>
      {showAlert && (
        <Alert variant="success" className="alert-message">
          محصول با موفقیت به سبد خرید اضافه شد!
        </Alert>
      )}
    </>
  );
}

export default AlertAddProduct;
