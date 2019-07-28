import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultStore = fromJS({
    title: '',
    content: '',
    imgUrl: ''
})

export default (state=defaultStore, action) => {
    switch(action.type){
        case actionTypes.DATA:
            return state.merge({
                title: fromJS(action.res.title),
                content: fromJS(action.res.content),
                imgUrl: fromJS(action.res.imgUrl)
            })
        default: return state;
    }
}