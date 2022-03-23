import './Footer.css'

import VK from '../../../icons/social/vk_white.png'
import FACEBOOK from '../../../icons/social/facebook_white.png'
import INST from '../../../icons/social/inst_white.png'

// router-dom
import {Link} from 'react-router-dom'

import Logo from '../../../icons/Logo.png'

export const Footer = () => {

    const listSocial = [
        {className: 'ic-inst', href: 'https://www.instagram.com/', srcUri: INST},
        {className: 'ic-vk', href: 'https://www.vk.com/', srcUri: VK},
        {className: 'ic-face', href: 'https://www.facebook.com/', srcUri: FACEBOOK}
    ]

    return (
        <footer className="footer-container">
            <section className="footer-main-content">
                <div className="logo-social-icon">
                    <div className="logo-footer__container">
                        <Link to="/"><img src={Logo} alt="Medical"/></Link>
                    </div>
                    <div className="social-icon-footer-group_container">
                        {
                            listSocial.map(social =>
                                <span key={social.className} className='social-icon-footer-container'>
                                    <a className={social.className} href={social.href}>
                                        <img src={social.srcUri} alt=""/>
                                    </a>
                                </span>
                            )
                        }
                    </div>
                </div>
                <div className='links-footer_container'>
                    <div className='main-links'>
                        <Link to='/about'>Обо мне</Link>
                        <a href="https://xn----ctbgeadgl8bdcbz.xn--p1ai/">Клиники</a>
                    </div>
                </div>
            </section>
            <section className="footer-bottom-container">
                <p>@ {new Date().getFullYear()} Клиника</p>
                <Link to="/">Политика конфидициальности</Link>
            </section>
        </footer>
    )
}

