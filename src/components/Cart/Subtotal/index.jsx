import PropTypes from 'prop-types';
import './Subtotal.css';

Subtotal.propTypes = {
    cart: PropTypes.array.isRequired,
}

function Subtotal ({ cart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className='subtotalContainer'>
      <h2>Subtotal</h2>
      <p>${total}</p>
      <button>Continue</button>
    </div>
  );
}

export { Subtotal };