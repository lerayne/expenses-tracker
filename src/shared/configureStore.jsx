/**
 * Created by lerayne on 07.01.17.
 */

import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore(initialState = {}) {

    let enhancer

    if (process.env.NODE_ENV === 'production'){
        enhancer = applyMiddleware(thunk)
    } else {

        const DevTools = require('../client/components/DevTools/index').default

        enhancer = compose(
            applyMiddleware(thunk),
            DevTools.instrument()
        )
    }

    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
        module.hot.accept('./reducers', () =>
            store.replaceReducer(require('./reducers/index').default)
        );
    }

    return store;
}