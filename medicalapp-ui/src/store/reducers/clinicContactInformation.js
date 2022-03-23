import {
    FETCH_CONTACT_START,
    FETCH_CONTACT_SUCCESS,
    FETCH_CONTACT_ERROR
} from '../actionTypes'


const initialState = {
    contactInformation: [],
    loading: false,
    error: null
}

const clinicContactInformationReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_CONTACT_START:
            return {
                ...state, loading: true
            }
        case FETCH_CONTACT_SUCCESS:
            return {
                ...state, loading: false, contactInformation: action.data
            }
        case FETCH_CONTACT_ERROR:
            return {
                ...state, loading: false, error: action.error
            }
        default:
            return state
    }
}

export default clinicContactInformationReducer
