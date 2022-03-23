import {Link} from 'react-router-dom'

import './FourCubes.css'

// import images
import HelpingHand from '../../../icons/four_cubes/helping_hand.svg'
import Medic from '../../../icons/four_cubes/medic.svg'
import MedicalHouse from '../../../icons/four_cubes/medical_house.svg'
import Request from '../../../icons/four_cubes/request.svg'

const cubesContent = [
    {imgUri: HelpingHand, text: 'Для пациентов', link: '/', backgroundColor: '#27dce1'},
    {imgUri: Medic, link: '/', text: 'Врачи', backgroundColor: '#f04'},
    {imgUri: MedicalHouse, link: '/', text: 'Клиника', backgroundColor: '#5000cd'},
    {imgUri: Request, link: '/', text: 'Отправить запрос', backgroundColor: '#fff14b'}
]

export const FourCubes = () => {
    return (
        <div className="four-cubes-container">
            {
                cubesContent.map(item =>
                    <div key={item.text} className="cubes-container" style={{ backgroundColor: item.backgroundColor }}>
                        <Link to={item.link}>
                            <div className="item-content">
                                <img src={item.imgUri} alt="Icon cubes"/>
                                <h3>{item.text}</h3>
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

