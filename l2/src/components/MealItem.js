import React from 'react';
import OrderButton from './OrderButton';

import styles from './MealItem.module.scss';

const MealItem = ({ meal, amount, addItem, removeItem }) => (
    <div className={styles.card}>
        <img 
            className={styles.mealImage} 
            src={meal.imageUrl} 
            alt={meal.name}
        />
        <div className={styles.mealName}>{meal.name}</div>
        <div>{meal.ingredient_list}</div>
        <div className={styles.footer}>
            <div className={styles.price}>{meal.price}</div>
            <OrderButton 
                amount={amount}
                addItem={addItem} 
                removeItem={removeItem}     
            />
        </div>
    </div>
);

export default MealItem;