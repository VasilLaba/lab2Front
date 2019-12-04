import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import OrderProvider from './contexts/OrderProvider';
import * as serviceWorker from './serviceWorker';
import getFirebaseConfig from './firebase-config';
import 'bootstrap';
import './index.scss';

const firebaseConfig = getFirebaseConfig();

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <OrderProvider>
        <App />
    </OrderProvider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
