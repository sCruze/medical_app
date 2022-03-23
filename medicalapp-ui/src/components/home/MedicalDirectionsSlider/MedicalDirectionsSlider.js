
import './MedicalDirectionsSlider.css'

const MedicalDirectionsSlider = ({directions}) => {
    return (
        <div className='medical-directions-slider__container'>
            <span className='header-directions-slider'>Направления</span>
            <ul className='medical-directions-slider'>
                {
                    directions.map(item => <li key={item.direction}>{item.direction}</li>)
                }
            </ul>
        </div>
    )
}

export default MedicalDirectionsSlider
