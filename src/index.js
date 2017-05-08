
import React from 'react';
import ReactDOM from 'react-dom';


import {Provider} from 'react-redux';
import Store from './store';
import AppRouter from "./routes";

const StoreInstance = Store();


//Entry point
ReactDOM.render(
    <Provider store={StoreInstance}>
        <AppRouter/>
    </Provider>,
    document.getElementById('root')
);