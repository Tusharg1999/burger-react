import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import BurgerReducer from './store/reducers/burgerBuilderReducers';
import OrderReducer from './store/reducers/orderReducers';

const rootReducers = combineReducers({
    burger: BurgerReducer,
    order: OrderReducer
})
const store = createStore(rootReducers);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
ReactDOM.render(
    app,
    document.getElementById('root')
);

serviceWorker.unregister();
