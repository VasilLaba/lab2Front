import React from 'react';
import classNames from 'classnames';
import styles from './OrderButton.module.scss';

const OrderButton = ({ amount, addItem, removeItem }) => (
    <div className={styles.container}>
        {amount !== 0 && (
            <div className={styles.displayAmount}>
                {amount}
            </div>
        )}
        <div 
            className={classNames(styles.oval, { [styles.ovalContainer]: amount !== 0})} 
            onClick={amount === 0 ? addItem : () => {}}> 
        
            {amount === 0 ? '+' : (
                <div className={styles.controlsList}>
                    <div onClick={addItem}>+</div>
                    <div onClick={removeItem}>-</div>
                </div>
            )}   
        </div>
    </div>
);

export default OrderButton;