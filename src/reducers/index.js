import { combineReducers } from 'redux';
import topicsReducer from './topicsReducer';

const allReducers = combineReducers({
  topicsReducer
});

export default allReducers;