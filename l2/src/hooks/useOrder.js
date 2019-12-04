import { useContext } from 'react';
import OrderContext from '../contexts/order-context';

const useOrder = () => {
    const { order, setOrder } = useContext(OrderContext);

    const helper = callback => meal => {
        const existedMealIndex = order.findIndex(orderMeal => orderMeal.meal.id === meal.id);
        if (existedMealIndex !== -1) {
            const newMeal = {
                meal,
                amount: callback(order[existedMealIndex].amount)
            };
            const newOrder = [
                ...order.filter((meal, index) => index < existedMealIndex),
                newMeal,
                ...order.filter((meal, index) => index > existedMealIndex),
            ];
            setOrder(newOrder);
        }
        else {
            const newMeal = {
                meal,
                amount: 1
            };
            const newOrder = [
                ...order,
                newMeal
            ];
            setOrder(newOrder);
        }
    };

    const addInstance = meal => {
        helper(amount => amount + 1)(meal);
    };

    const removeInstance = meal => {
        helper(amount => amount - 1)(meal);
    };

    const removeAllInstances = meal => {
        setOrder(
            order.filter(order => order.meal.id !== meal.id)
        );
    };

    const makeOrder = () => setOrder([]);

    return [order, addInstance, removeInstance, removeAllInstances, makeOrder];
};

export default useOrder;