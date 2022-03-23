import {
    FETCH_HOME_PAGE_START,
    FETCH_HOME_PAGE_SUCCESS,
    FETCH_HOME_PAGE_ERROR
} from '../actionTypes'

// request
import request from '../../hooks/request'

export const fetchDataHomePage = () => async (dispatch) => {
    dispatch(fetchDataHomePageStart())

    try {
        const directions = await request('medical-directions')
        const slogan = await request('slogan')
        const statistics = await request('statistics')

        dispatch(fetchDataHomePageSuccess([directions, slogan, statistics]))
    } catch (err) {
        dispatch(fetchDataHomePageError(err))
    }

}

export const fetchDataHomePageStart = () => {
    return {
        type: FETCH_HOME_PAGE_START
    }
}

export const fetchDataHomePageSuccess = (data) => {
    return {
        type: FETCH_HOME_PAGE_SUCCESS,
        data
    }
}

export const fetchDataHomePageError = (err) => {
    return {
        type: FETCH_HOME_PAGE_ERROR,
        error: err
    }
}

