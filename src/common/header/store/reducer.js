import * as actionTypes  from './actionTypes'
import { fromJS } from 'immutable'
const defaultStore = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 0,
    totalPage: 1,
    show: false
})
export default (state=defaultStore, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false);
        case actionTypes.CHANGE_LIST:
            return state.merge({
                list: action.list,
                totalPage: action.totalPage
            })
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionTypes.MOUSE_LEAVE: 
            return state.set('mouseIn', false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page', action.page);
        default: return state;
    }
}