import {combineReducers} from 'redux'
import clinicContactInformationReducer from './clinicContactInformation'
import dataHomePageReducer from './dataHomePage'
import doctorsReducer from './dataDoctors'


export default combineReducers({
    clinicContactInformation: clinicContactInformationReducer,
    dataHomePage: dataHomePageReducer,
    dataDoctors: doctorsReducer,
})
