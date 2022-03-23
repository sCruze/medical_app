import {
    FETCH_DOCTORS_START,
    FETCH_DOCTORS_SUCCESS,
    FETCH_DOCTORS_ERROR
} from '../actionTypes'


// request
import request from '../../hooks/request'


export const fetchDoctors = () => async (dispatch) => {
    dispatch(fetchDoctorsStart())

    try {
        const doctorsName = await request('doctors-name')
        const doctorsDescription = await request('doctors-description')
        const doctorsQualifications = await request('doctors-qualifications')
        const doctorsInterests = await request('doctors-interests')

        dispatch(fetchDoctorsSuccess([doctorsName, doctorsDescription, doctorsQualifications, doctorsInterests]))
    } catch (err) {
        dispatch(fetchDoctorsError(err))
    }

}

export const fetchDoctorsStart = () => {
    return {
        type: FETCH_DOCTORS_START
    }
}

export const fetchDoctorsSuccess = (data) => {
    return {
        type: FETCH_DOCTORS_SUCCESS,
        data
    }
}

export const fetchDoctorsError = (err) => {
    return {
        type: FETCH_DOCTORS_ERROR,
        error: err
    }
}

