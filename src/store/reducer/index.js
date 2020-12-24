import msgCount from './msgCount'
import carCount from './carCount'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    msgCount,
    carCount
})

export default reducer;