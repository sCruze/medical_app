import {useState} from 'react'

import './CallRequestForm.css'

const CallRequestForm = ({onShow}) => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [message, setMessage] = useState('')

    const nameFields = [
        {name: 'Имя *', hookName: name, hookSetName: setName},
        {name: 'Фамилия *', hookName: surname, hookSetName: setSurname},
        {name: 'E-mail *', hookName: email, hookSetName: setEmail},
        {name: 'Телефон', hookName: phone, hookSetName: setPhone},
        {name: 'Адрес', hookName: address, hookSetName: setAddress},
        {name: 'Сообщение', hookName: message, hookSetName: setMessage}
    ]

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('submit')

        console.log('name', name)
        console.log('surname', surname)
        console.log('email', email)
        console.log('phone', phone)
        console.log('address', address)
        console.log('message', message)
    }

    const dataRecording = (e, setNameHook) => {
        setNameHook(e.target.value)
    }

    const onFocus = (e) => {
        e.target.parentElement.classList.add('focus-input')
    }

    const onBlur = (e) => {
        if (e.target.value === '') {
            e.target.parentElement.classList.remove('focus-input')
        }
    }

    return (
        <div
            onClick={(e) => onShow(e, false)}
            className='call-request-form_container'
        >
            <div className='call-request-form-modal_container'>
                <div className='title-call-request-form_container'>
                    <div className='title-description_container'>
                        <h2>Отправить запрос</h2>
                        <p>Заполните все поля и нажмите "Отправить"</p>
                    </div>
                    <div className='title-btns_container'>
                        <span className='stretch-form-btn'>
                        </span>
                        <span className='close-form-btn'>
                        </span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className='form-call-request-modal-window'>
                    <p className='description-rules'>
                        Обязаьельное поле
                        <span className='required-field'>
                            *
                        </span>
                    </p>
                    {
                        nameFields.map(field =>
                            field.name === 'Сообщение'
                                ? <div key={field.name} className='input-field_container textarea-block'>
                                    <label>{field.name}</label>
                                    <textarea
                                        type='textarea'
                                        rows='5'
                                        onFocus={(e) => onFocus(e)}
                                        onBlur={(e) => onBlur(e)}
                                    ></textarea>
                                  </div>
                                : <div key={field.name} className='input-field_container'>
                                    <label>{field.name}</label>
                                    <input
                                        type="text"
                                        value={field.hookName}
                                        onChange={(e) => dataRecording(e, field.hookSetName)}
                                        // onClick={(e) => onFocus(e)}
                                        onFocus={(e) => onFocus(e)}
                                        onBlur={(e) => onBlur(e)}
                                    />
                                  </div>
                        )
                    }
                    <div className='btn-group'>
                        <button className='btn btn-danger btnCancel'>Отменить</button>
                        <button type='submit' className='btn btn-success'>Отправить запрос</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CallRequestForm
