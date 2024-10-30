import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/shopping-cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { deleteProduct } from '../redux/actions/actionCreator';


function ShoppingCart() {
  const { items, totalPrice } = useSelector(state => state);
  const dispatch = useDispatch();
 
  const handleDeleteProduct = (productName) => {
    dispatch(deleteProduct(productName))
  }

  return (
    <>
    <div>
      <Table responsive="sm" className="ShoppingCart">
        <thead>
          <tr className="tr-table">
            <th>Plant List</th>
            <th>Quantity</th>
            <th>Price $</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{(item.price * item.quantity).toFixed(2)}</td>
              <td style={{color: '#ffd700'}}>{"★".repeat(item.stars)}</td>
            </tr>
           
          ))}
          <hr style={{width:'100%'}} />
          
          <span></span>
          <tr>
    <td  style={{ textAlign: 'left' }}><strong>Total Price: <span>{totalPrice.toFixed(2)} $</span></strong></td>
          </tr>
        </tbody>
      </Table>
    </div>
    <section className="product-cards-container">
        {items.map((item, index) => (
          <div key={index} className="product-card-shop">
            <img src={item.src} alt={item.name} className="product-image-shop" />
            <div className='product-info'>
            <h4 className='product-name-shop'>{item.name}</h4>
            <p>{item.quantity} * {(item.price * item.quantity).toFixed(2)}</p>
            </div>
            
            <button className='x-mark-btn' onClick={() => handleDeleteProduct(item.name)}>
            <FontAwesomeIcon icon={faXmark} className='x-mark-icon'/>
            </button>

            </div>

        ))}
      </section>    
      </>
  );
}

export default ShoppingCart;
