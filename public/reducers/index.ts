import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import error from './Form/Form.reducers';
import {authentication} from './User/User.reducers';
import device from './Mobile/Mobile.reducers';
import preloader from './PreLoader/Preloader.reducers';

const reducer = combineReducers({
  authentication,
  preloader,
  device,
  error,
  routing: routerReducer,
  form: formReducer
});

export default reducer;
