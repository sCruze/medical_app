import {
    FETCH_STATISTIC_START,
    FETCH_STATISTIC_SUCCESS,
    FETCH_STATISTIC_ERROR
} from '../actionTypes'

// request
import request from '../../hooks/request'

export const fetchStatistics = () => async (dispatch) => {
    dispatch(fetchStatisticsStart())

    try {
        const statistics = await request('statistics')

        dispatch(fetchStatisticsSuccess(statistics))
    } catch (err) {
        dispatch(fetchStatisticsError(err))
    }

}

export const fetchStatisticsStart = () => {
    return {
        type: FETCH_STATISTIC_START
    }
}

export const fetchStatisticsSuccess = (data) => {
    return {
        type: FETCH_STATISTIC_SUCCESS,
        data
    }
}

export const fetchStatisticsError = (err) => {
    return {
        type: FETCH_STATISTIC_ERROR,
        error: err
    }
}
