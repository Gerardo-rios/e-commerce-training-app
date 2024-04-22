import { Rating } from './Rating'
import PropTypes from 'prop-types';
import './RatingFilter.css'
import { SearchContext } from '../../../contexts/SearchContext'
import { useContext } from 'react'

const ClickableRating = ({ stars, onClick }) => {
    return (
        <div onClick={onClick}>
            <Rating stars={stars} />
        </div>
    );
}

ClickableRating.propTypes = {
    stars: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

function RatingFilter () {
    const { setFilterByRateValue } = useContext(SearchContext);

    const filterByRate = (rate) => {
        setFilterByRateValue(rate);
    }

    return (
        <div className='RatingFilterContainer'>
            <h2>Rates:</h2>
            <div className='RatingsContainer'>
                <ClickableRating stars={4} onClick={() => filterByRate(4)} />
                <ClickableRating stars={3} onClick={() => filterByRate(3)} />
                <ClickableRating stars={2} onClick={() => filterByRate(2)} />
                <ClickableRating stars={1} onClick={() => filterByRate(1)} />
            </div>
        </div>
    )
}

export { RatingFilter }
