import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import MealsContainer from './components/MealsContainer';
import Order from './components/Order';
import Header from './components/Header';

const Router = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path='/meals' component={MealsContainer} />
            <Route exact path='/order' component={Order} />
            <Route exact path='/' render={() => <Redirect to='/meals' />} />
        </Switch>
    </BrowserRouter>
);

export default Router;