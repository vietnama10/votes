import { combineReducers } from 'redux'
import votes from '../Vote/containers/reducer';

const rootReducer = combineReducers({
 votes
})

export default rootReducer