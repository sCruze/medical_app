import {useEffect, useState} from 'react'
import {connect} from 'react-redux'

// Actions
import {fetchClinicContactInformation} from '../../store/actions/getContactInformationHomePage'
import {fetchDataHomePage} from '../../store/actions/getDataHomePage'

// Style
import './HomePage.css'

// layout
import MainLayout from '../../hoc/Layouts/MainLayout/MainLayout'

// Components
import HeaderNavBar from '../../components/home/HeaderNavBar/HeaderNavBar'
import Header from '../../components/home/Header/Header'
import DualRing from '../../components/loaders-animation/DualRing/DualRing'
import MainContent from '../../components/home/MainContent/MainContent'
import Statistics from '../../components/home/Statistics/Statistics'
import MedicalCards from '../../components/home/MedicalCards/MedicalCards'

import CallRequestForm from '../../components/CallRequestForm/CallRequestForm'
import {fetchDoctors} from "../../store/actions/getDoctors";

const HomePage = (props) => {

    const [showCallRequestForm, setShowCallRequestForm] = useState(false)

    // Используем метод, для вызова action до загрузки страницы
    useEffect(() => {
        props.onContactInformation()
        props.onDataHomePage()
        props.onDoctors()
    }, [])


    // Метод показа Фломы обратной связи
    const onShowCallRequestForm = (e, show) => {
        const body = document.querySelector('body')
        if (show) {
            body.classList.add('overflow-hidden')
            setShowCallRequestForm(show)
        } else if (
            e.target.classList.contains('call-request-form_container')
            || e.target.classList.contains('close-form-btn')
            || e.target.classList.contains('btnCancel')
        ) {
            body.classList.remove('overflow-hidden')
            setShowCallRequestForm(show)
        }
    }


    return (
        <MainLayout>
            <div className="homePage-container">
                {
                    !props.loadingClinicContactInformation && props.clinicContactInformation.contactInformation.length !== 0
                        ? <HeaderNavBar data={props.clinicContactInformation.contactInformation} />
                        : <DualRing />
                }
                <Header />
                <MainContent props={props.dataHomePage} />
                <Statistics
                    statistics={props.dataHomePage.statistics[0]}
                    onShow={onShowCallRequestForm}
                />
                {
                    showCallRequestForm
                        ? <CallRequestForm onShow={onShowCallRequestForm} />
                        : null
                }
                {
                    !props.loadingDoctors
                    ? <MedicalCards
                        doctors={props.doctors}
                      />
                    : null
                }
            </div>
        </MainLayout>
    )
}

const mapStateToProps = (state) => {
    return {
        clinicContactInformation: state.clinicContactInformation,
        loadingClinicContactInformation: state.clinicContactInformation.loading,
        dataHomePage: state.dataHomePage,
        loadingDataHomePage: state.dataHomePage.loading,
        doctors: state.dataDoctors,
        loadingDoctors: state.dataDoctors.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onContactInformation: () => dispatch(fetchClinicContactInformation()),
        onDataHomePage: () => dispatch(fetchDataHomePage()),
        onDoctors: () => dispatch(fetchDoctors()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
