import {
    FETCH_CONTACT_START,
    FETCH_CONTACT_SUCCESS,
    FETCH_CONTACT_ERROR
} from '../actionTypes'

// request
import request from '../../hooks/request'

export const fetchClinicContactInformation = () => async (dispatch) => {
    dispatch(fetchClinicContactInformationStart())
    try {
        const resContactInformation = await request('medical-information')

        dispatch(fetchClinicContactInformationSuccess(resContactInformation[0]))
    } catch (err) {
        dispatch(fetchClinicContactInformationError(err))
    }

}

const fetchClinicContactInformationStart = () => {
    return {
        type: FETCH_CONTACT_START
    }
}

export const fetchClinicContactInformationSuccess = (data) => {
    return {
        type: FETCH_CONTACT_SUCCESS,
        data
    }
}

export const fetchClinicContactInformationError = (err) => {
    return {
        type: FETCH_CONTACT_ERROR,
        error: err
    }
}

