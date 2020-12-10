import axios from 'axios'

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_ERROR = 'FETCHING_DATA_ERROR';

export const fetchAllData = word => dispatch => {

    dispatch({ type: FETCHING_DATA_START});

    axios.get('https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + word + '?key=7990364e-3b65-401c-8dae-5d955ddc82a9')
    .then(res => {
        console.log('fetchAllData SUCCESS', res)
        dispatch({type: FETCHING_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log('fetchAllData ERROR', err)
        dispatch({type: FETCHING_DATA_ERROR, payload: err.message})
    })

};

export const FAVORITE_WORD = 'FAVORITE_WORD';

export const favoriteWord = word => {
    
    return {type: FAVORITE_WORD, payload: word};
}