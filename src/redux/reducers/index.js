import {combineReducers} from 'redux';
// import exampleReducer from './exampleReducer';
import exampleReducer from './examplereducer';
import loginid from './loginid';

const rootReducer = combineReducers({
  exampleReducer: exampleReducer,
  loginid: loginid,
});

export default rootReducer;
