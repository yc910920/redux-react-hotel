    /* jshint ignore:start */

import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import promiseMiddleware from '../middleware/promiseMiddleware';

import { createHistory } from 'history';
import rootReducer from '../reducers';

export default function configureStore(routes) {
    const finalCreateStore = compose(
        applyMiddleware(
            promiseMiddleware
        ),
        reduxReactRouter({
            routes,
            createHistory
        }),
        window.devToolsExtension ? window.devToolsExtension() : fun => fun
    )(createStore);

    const store = finalCreateStore(rootReducer);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
