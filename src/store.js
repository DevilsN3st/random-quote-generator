import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './redux/reducer';

const store = createStore( reducer, compose(applyMiddleware(thunk)));

export default store;

