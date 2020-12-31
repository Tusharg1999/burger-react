import React from 'react';
import Layout from '../components/layout/Layout.js'
import './App.css'
import BurgerBuilder from "./burgerBuilder/BurgerBuilder";
import Checkout from "./checkout/Checkout";
import { Route, Switch } from "react-router-dom";

function App() {

    return (
        <div className="container">
            <Layout>
                <Switch>
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/" exact component={BurgerBuilder} />
                </Switch>
            </Layout>
        </div>

    );
}

export default App;
