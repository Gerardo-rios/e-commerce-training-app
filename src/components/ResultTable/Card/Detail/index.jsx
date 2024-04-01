import PropTypes from 'prop-types';
import { Rating } from "../../../Filter/RatingFilter/Rating"
import './Detail.css'

Detail.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
};

function Detail ({title, price, rate }) {
    return (
        <div className="DetailsCardContainer">
            <h3>{title}</h3>
            <Rating stars={rate}/>
            <h3>${price}</h3>
        </div>
    )
}

export { Detail }
