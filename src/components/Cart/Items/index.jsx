import './Items.css'
import PropTypes from 'prop-types';
import { Item } from './Item'

Items.propTypes = {
  items: PropTypes.array.isRequired,
};

function Items ({ items }) {
  return (
    <div className="itemsContainer">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}

export { Items }