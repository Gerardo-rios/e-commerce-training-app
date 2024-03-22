import PropTypes from 'prop-types';
import { Rating } from "../../../Filter/RatingFilter/Rating"
import './Detail.css'

Detail.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

function Detail ({title, price }) {
    return (
        <div className="DetailsCardContainer">
            <h3>{title}</h3>
            <Rating stars={3}/>
            <h3>${price}</h3>
        </div>
    )
}

export { Detail }
