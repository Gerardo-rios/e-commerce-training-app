import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';

TypeFilter.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
};

function TypeFilter ({ name, options }) {
    const { setFilterByCategoryValue } = useContext(SearchContext);
    const [selectedOption, setSelectedOption] = useState("");

    const filterByCategory = (category, isChecked) => {
        if (isChecked) {
            setFilterByCategoryValue(category);
            setSelectedOption(category);
        } else {
            setFilterByCategoryValue("");
            setSelectedOption("");
        }
    };

    return (
        <div className='TypeFilterContainer'>
            <h2>{name}:</h2>
            {options.map((option) => (
                <div key={option.id} className='CheckBox'>
                    <input
                        type="checkbox"
                        id={option.id}
                        name={option.label}
                        onChange={(e) => {
                            if (selectedOption === option.id) {
                                filterByCategory("", false);
                            } else {
                                filterByCategory(option.id, e.target.checked);
                            }
                        }}
                        checked={selectedOption === option.id}
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                </div>
            ))}
        </div>
    );
}

export { TypeFilter };
