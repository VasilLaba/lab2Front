import React from 'react';
import Slider from 'rc-slider';

import styles from './MealsFilter.module.scss';

const { createSliderWithTooltip } = Slider;

const Range = createSliderWithTooltip(Slider.Range);

const MealsFilters = ({ minPrice, maxPrice, minPriceFilter, maxPriceFilter, onChange }) => {
    return (
        <div className={styles.filtersContainer}>
            <div className={styles.filterName}>
                Price:
                <Range 
                    min={minPrice} 
                    max={maxPrice}
                    value={[minPriceFilter, maxPriceFilter]}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default MealsFilters;