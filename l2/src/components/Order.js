import React, { useState, useMemo } from 'react';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import useOrder from '../hooks/useOrder';

import styles from './Order.module.scss';

const Order = () => {
    const [
        order, 
        addInstance, 
        removeInstance, 
        removeAllInstances,
        makeOrderRequest
    ] = useOrder();
    const [submitted, setSubmitted] = useState(false);

    const makeOrder = () => {
        makeOrderRequest();
        setSubmitted(true);
    };

    const getTotalAmount = () => 
        order.reduce((result, current) => result + current.meal.price * current.amount, 0);

    const totalAmount = useMemo(getTotalAmount, [order]);

    if (submitted) return (
        <Alert variant='success'>Your order is processing</Alert>
    );

    if (!order.length) return (
        <div className={styles.notFound}>No added items yet:(</div>
    );

    return (
        <div>
            <h2>Order</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Meal name</th>
                        <th>Photo</th>
                        <th>Amount</th>
                        <th>Price</th>
                        <th>Total price</th>
                        <td colspan={3}></td>
                    </tr>
                </thead>
                <tbody>
                    {order.map((order, index) => (
                        <tr key={index}>
                            <td>
                                {order.meal.name}
                            </td>
                            <td>
                                <img src={order.meal.imageUrl} alt={order.meal.name} />
                            </td>
                            <td>{order.amount}</td>
                            <td className={styles.noWrap}>{order.meal.price} $</td>
                            <td className={styles.noWrap}>{order.meal.price * order.amount} $</td>
                            <td>
                                <Button 
                                    variant='secondary'
                                    onClick={() => removeInstance(order.meal)}
                                >
                                    -
                                </Button>
                            </td>
                            <td>
                                <Button 
                                    variant='secondary'
                                    onClick={() => addInstance(order.meal)}
                                >
                                    +
                                </Button>
                            </td>
                            <td>
                                <Button 
                                    variant='danger' 
                                    onClick={() => removeAllInstances(order.meal)}
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div>Total: {totalAmount} $</div>
            <Button variant='primary' onClick={makeOrder}>Order</Button>
        </div>
    );
};

export default Order;