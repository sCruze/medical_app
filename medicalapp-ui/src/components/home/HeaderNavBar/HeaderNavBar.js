import {Link} from 'react-router-dom'

// Style
import './HeaderNavBar.css'

// icon
import smartphoneIcon from '../../../icons/mini/smartphone-_64_.svg'
import arrowIcon from '../../../icons/arrow-btn.svg'
import messageIcon from '../../../icons/mini/message_icon-64.svg'
import searchIcon from '../../../icons/search_icon.svg'

// img
import Logo from '../../../icons/Logo.png'

// Список языков
const languages = [{lang: 'Ру', select: true}, {lang: 'En', select: false}]

const listMain_navbar = [
    {title: 'Доктора', link: 'doctor', isLink: true},
    {title: 'Клиника', link: 'clinic', isLink: true},
    {title: 'Направления', link: 'directions', list: ['Ядерная медицина', 'Онкология', 'Ортопедия', 'Баритория', 'Кардиохирургия'], isLink: false},
    {title: 'Услуги', link: 'services', list: ['Медицинское обследование', 'Чекапы', 'Медицина нотложной помощи', 'Реабилитация'], isLink: false},
    {title: 'Для Пациентов', link: 'for-patient', list: ['Как организовать лечение', 'Стоимость', 'Часто задаваемые вопросы'], isLink: false},
    {title: 'Контакты', isLink: true}
]

const HeaderNavBar = ({data}) => {

    return (
        <div className="header-NavBar-container">
            <div className="header-NavBar-top">
                <div className="header-NavBar-left-container">
                    <div className="location-phone-container">
                        <div className="phone-content-container">
                            <img src={smartphoneIcon} className="smartphone-icon icon" alt="logo" />
                            <span>Россия:</span>
                            <span className="value-number">{data.phone}</span>
                        </div>
                        <div className="location-content-container">
                            <p>{data.location}</p>
                        </div>
                    </div>
                    <div className="mail-container">
                        <img src={messageIcon} className="mail-icon icon" alt="logo" />
                        <span>{data.email}</span>
                    </div>
                </div>
                <div className="header-NavBar-right-container">
                    <form method="get">
                        <div className="search-panel">
                            <input type="text" placeholder="Введите слово..."/>
                            <img src={searchIcon} alt="search"/>
                        </div>
                    </form>
                    <div className="lang-panel">
                        {
                            languages.map(lang => lang.select ? <p key={lang}>{lang.lang}</p> : null)
                        }
                        <img src={arrowIcon} className="arrow-icon icon" alt="arrow"/>
                    </div>
                </div>
            </div>

            <div className="header-NavBar-bottom">
                <Link to="/" className="logo-container"><img src={Logo} alt="Logo"/></Link>
                <ul className="navBar-link-container">
                    {
                        listMain_navbar.map(item =>
                            item.isLink
                            ? <li key={item.title}><Link to="">{item.title}</Link></li>
                            : <li key={item.title} className="item-popUp-list">
                                    <p>{item.title}</p>
                                    <img src={arrowIcon} alt="Arrow"/>
                              </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default HeaderNavBar
