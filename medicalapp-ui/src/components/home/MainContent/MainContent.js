
// Style
import './MainContent.css'

// Components
import MedicalDirectionsSlider from '../MedicalDirectionsSlider/MedicalDirectionsSlider'
import Slogan from '../Slogan/Slogan'

const MainContent = ({props}) => {
    return (
        <div className="main-content-home-page">
            <MedicalDirectionsSlider directions={props.directions} />
            <Slogan slogan={props.slogan} />
        </div>
    )
}

export default MainContent
