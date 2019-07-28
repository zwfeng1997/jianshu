import * as actionTypes from './actionTypes'
import axios from 'axios';
import { fromJS } from 'immutable'

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})

export const getData = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
        .then((res) => {
            const result = res.data.data;
            dispatch(toData(result))
            
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page)
        .then((res) => {
            const result = res.data.data;
            dispatch(addtopicList(result, page+1))
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export const show = () => ({
    type: actionTypes.SHOW
})

export const no_show = () => ({
    type: actionTypes.NO_SHOW
})

const toData = (res) => ({
    type: actionTypes.DATA,
    res: res
})

const addtopicList = (res, nextPage) => ({
    type: actionTypes.ADD_ARTICLE_LIST,
    res: fromJS(res),
    nextPage
})