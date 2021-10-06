import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor }