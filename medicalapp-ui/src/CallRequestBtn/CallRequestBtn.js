import './CallRequestBtn.css'
import Call from '../icons/call_request/call.svg'
import Phone from '../icons/call_request/phone-wt.svg'

const CallRequestBtn = ({color, onShow}) => {

    return (
        <div className={color === 'purple' ? 'call-request_container purple purple-hover' : 'call-request_container green green-hover'}>
            <div className='call-request-description_container'>
                <h2>Отправить запрос</h2>
                <div className='call-description'>
                    <img src={Call} alt="call"/>
                    <p>Мы говорим на русском</p>
                </div>
            </div>
            <button
                className='btn btn-outline-primary'
                onClick={(e) => onShow(e, true)}
            >
                Отправить запрос
                <img src={Phone} alt=""/>
            </button>
        </div>
    )
}

export default CallRequestBtn