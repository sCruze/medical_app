import {
    FETCH_HOME_PAGE_START,
    FETCH_HOME_PAGE_SUCCESS,
    FETCH_HOME_PAGE_ERROR
} from '../actionTypes'


const initialState = {
    directions: [],
    slogan: [],
    statistics: [],
    loading: false,
    error: null
}

const dataHomePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HOME_PAGE_START:
            return {
                ...state, loading: true
            }
        case FETCH_HOME_PAGE_SUCCESS:
            return {
                ...state, loading: false, directions: action.data[0], slogan: action.data[1], statistics: action.data[2]
            }
        case FETCH_HOME_PAGE_ERROR:
            return {
                ...state, loading: false, error: action.error
            }
        default:
            return state
    }
}

export default dataHomePageReducer
