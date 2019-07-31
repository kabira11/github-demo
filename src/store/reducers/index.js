import reducer from './reducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    rootReducer : reducer
   });
   
export default allReducers;