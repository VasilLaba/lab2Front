import React, { useState } from 'react';
import OrderContext from './order-context';

const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState([]);
    return (
        <OrderContext.Provider value={{ order, setOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderProvider;