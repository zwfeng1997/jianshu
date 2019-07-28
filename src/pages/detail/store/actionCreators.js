import * as actionTypes from './actionTypes'
import axios from 'axios'

export const getData = (id) => {
    return (dispath) => {
        axios.get('/api/detail.json?id=' + id)
        .then((res) => {
            const result = res.data.data
            dispath(toData(result))
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

const toData = (res) => ({
    type: actionTypes.DATA,
    res
})