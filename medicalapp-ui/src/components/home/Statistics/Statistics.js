import './Statistics.css'

import BackgroundImg from '../../../images/HomePage/statistic_fone.jpg'

import CallRequestBtn from '../../../CallRequestBtn/CallRequestBtn'
import DualRing from '../../loaders-animation/DualRing/DualRing'

const Statistics = ({statistics, onShow}) => {

    const dictionary = {
        patients_counter: 'Количество пациентов в год',
        chambers_counter: 'Количество палат',
        clinics_counter: 'Количество клиник',
        employees_counter: 'Количество сотрудников'
    }

    const fields = ['patients_counter', 'chambers_counter', 'clinics_counter', 'employees_counter']

    return (
        <div className='statistics-container' >
            <div className='statistics-counter_container' style={{ backgroundImage: `url(${BackgroundImg})` }}>
                {
                    statistics
                    ? fields.map(item =>
                            <div key={item} className='statistics-counter_container'>
                                <span className='counter-container'>
                                    <p>{statistics[item]}</p>
                                </span>
                                <span className='counter-description_container'>
                                    <p>{dictionary[item]}</p>
                                </span>
                            </div>
                        )
                    : <DualRing />
                }
            </div>
            <CallRequestBtn
                color='purple'
                onShow={onShow}
            />
        </div>
    )
}

export default Statistics
