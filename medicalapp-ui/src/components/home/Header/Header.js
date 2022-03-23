// Img
import BackgroundImg from '../../../images/HomePage/header.min.jpg'

// Style
import './Header.css'

// Components
import {FourCubes} from '../FourCubes/FourCubes'


const Header = () => {

    return (
        <header className="header-HomePage-container">
            <div className="g-bg-cover" style={{ backgroundImage: `url(${BackgroundImg})` }} ></div>

            <FourCubes />
        </header>
    )
}

export default Header
