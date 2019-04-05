import { applyMiddleware, combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import configsReducer from './config-reducer';
import countryReducer from './country-reducer';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    config: configsReducer,
    form: formReducer,
    countries: countryReducer,
});

export default function initializeStore(initialState = {}) {
    return createStore(
        rootReducer,
        initialState,
        process.env.NODE_ENV === 'development'
            ? composeWithDevTools(applyMiddleware(thunkMiddleware))
            : applyMiddleware(thunkMiddleware)
    );
}
