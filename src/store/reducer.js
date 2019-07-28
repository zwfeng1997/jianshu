import { headerReducer } from '../common/header/store'
import { combineReducers } from 'redux-immutable'
import  { homeReducer } from '../pages/home/store'
import { detailReducer } from '../pages/detail/store'


const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer
})
export default reducer