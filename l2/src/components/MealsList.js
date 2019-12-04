import React from 'react';
import MealItem from './MealItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MealsList = ({ meals, order, addItem, removeItem }) => {
    const getAmount = meal => {
        const orderItem = order.find(orderItem => orderItem.meal.id === meal.id);
        return orderItem ? orderItem.amount : 0;
    };
    return (
        <main>
            <Row>
                {meals.map(meal => (
                    <Col key={meal.id} xs={12} sm={6} md={4}>
                        <MealItem 
                            meal={meal}
                            amount={getAmount(meal)}
                            addItem={() => addItem(meal)}
                            removeItem={() => removeItem(meal)}
                        />
                    </Col>
                ))}
            </Row>
        </main>
    );
};

export default MealsList;