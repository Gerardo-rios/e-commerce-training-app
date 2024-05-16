import PropTypes from 'prop-types';
import './Subtotal.css';

Subtotal.propTypes = {
    subtotal: PropTypes.number.isRequired,
}

function Subtotal ({ subtotal }) {
  
  return (
    <div className='subtotalContainer'>
      <h2>Subtotal</h2>
      <p>${subtotal}</p>
      <button>Continue</button>
    </div>
  );
}

export { Subtotal };
