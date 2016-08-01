    /* jshint ignore:start */

import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import main from './main';
import detail from './detail';

export default combineReducers({
    router: routerStateReducer,
    main,
    detail
  
});
