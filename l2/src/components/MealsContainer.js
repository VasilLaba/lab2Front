import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import MealsService from '../services/meals-service';
import MealsList from './MealsList';
import MealsFilters from './MealsFilters';
import useOrder from '../hooks/useOrder';

const MealsContainer = () => {
    const [meals, setMeals] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [minPrice, setMinPrice] = useState(null);
    const [minPriceFilter, setMinPriceFilter] = useState(null);
    const [maxPriceFilter, setMaxPriceFilter] = useState(null);
    const [fetchedFirstTime, setFetchedFirstTime] = useState(false);
    const [
        order, 
        addInstance, 
        removeInstance
    ] = useOrder();

    const fetchMeals = async () => {
        try {
            const mealsService = new MealsService();
            const filters = {
                minPriceFilter,
                maxPriceFilter
            };
            const meals = await mealsService.getMeals(filters);
            setMeals(meals);
            const onFirstFetch = () => {
                const findPrice = (callback) => 
                    meals.reduce((result, current) => callback(result.price, current.price) ? current : result).price;

                const maxPrice = findPrice((previous, current) => current > previous);
                const minPrice = findPrice((previous, current) => current < previous);
                setMaxPrice(maxPrice);
                setMinPrice(minPrice);
                setFetchedFirstTime(true);
            };
            fetchedFirstTime || onFirstFetch();
        } catch(e) {
            setError(e);
        } finally {
            setIsFetching(false);
        }
    };

    useEffect(() => {
        fetchMeals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [maxPriceFilter, minPriceFilter]);

    if (isFetching) return (
        <div className='d-flex justify-content-center align-items-center h-100'>
            <Spinner animation='border' />
        </div>   
    );

    if (error) return <div>Oop! Something went wrong</div>;

    const onPriceChange = ([minPriceFilter, maxPriceFilter]) => {
        setMinPriceFilter(minPriceFilter);
        setMaxPriceFilter(maxPriceFilter);
    };

    return (
        <>
            <MealsFilters 
                minPrice={minPrice} 
                maxPrice={maxPrice}
                minPriceFilter={minPriceFilter || minPrice}
                maxPriceFilter={maxPriceFilter || maxPrice}
                onChange={onPriceChange}
            />
            <MealsList 
                meals={meals} 
                order={order}
                addItem={addInstance}
                removeItem={removeInstance}
            />  
        </>
    );
};

export default MealsContainer;