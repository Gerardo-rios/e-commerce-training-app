import PropTypes from 'prop-types';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import './Rating.css'

Rating.propTypes = {
    stars: PropTypes.number.isRequired,
};

function Rating ( {stars} ) {
    const fillStars = () => {
        const labels = [];
        const starSelected = [...Array(stars)].map((_, index) => (
            <AiFillStar className='StarFilled' key={index}/>
        ))
        const starNotSelected = [...Array(5-stars)].map((_, index) => (
            <AiOutlineStar className='StarNotFilled' key={index}/>
        ))
        labels.push(starSelected)
        labels.push(starNotSelected)
        return labels
    }

    return (
        <div className='RatingContainer'>
            {fillStars()}
        </div>
    )
}

export { Rating }