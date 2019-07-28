import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultStore = fromJS({
    topicList: [],
    articleList: [],
    user: [],
    recommendList: [],
    two: {},
    articlePage: 0,
    show: false,
    returnShow: false
    
})
export default (state=defaultStore, action) => {
    switch (action.type) {
        case actionTypes.MOUSE_ENTER:
            return state.set('show', true);
        case actionTypes.MOUSE_LEAVE:
                return state.set('show', false);
        case actionTypes.DATA:
            return state.merge({
                topicList: fromJS(action.res.topicList),
                articleList: fromJS(action.res.articleList),
                user: fromJS(action.res.user),
                recommendList: fromJS(action.res.recommendList),
                two: fromJS(action.res.two)
            })
        case actionTypes.ADD_ARTICLE_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.res),
                articlePage: fromJS(action.nextPage)
            })
        case actionTypes.SHOW:
            return state.set('returnShow', true)
        case actionTypes.NO_SHOW:
            return state.set('returnShow', false)
        default: return state;
    }
}