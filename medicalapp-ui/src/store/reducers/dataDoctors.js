import {
    FETCH_DOCTORS_START,
    FETCH_DOCTORS_SUCCESS,
    FETCH_DOCTORS_ERROR
} from '../actionTypes'


const initialState = {
    doctorsName: [],
    doctorsDescription: [],
    doctorsQualifications: [],
    doctorsInterests: [],
    loading: false,
    error: null
}

const doctorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DOCTORS_START:
            return {
                ...state, loading: true
            }
        case FETCH_DOCTORS_SUCCESS:
            return {
                ...state, loading: false, doctorsName: action.data[0], doctorsDescription: action.data[1], doctorsQualifications: action.data[2], doctorsInterests: action.data[3]
            }
        case FETCH_DOCTORS_ERROR:
            return {
                ...state, loading: false, error: action.error
            }
        default:
            return state
    }
}

export default doctorsReducer
