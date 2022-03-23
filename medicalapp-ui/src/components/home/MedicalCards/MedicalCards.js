
import './MedicalCards.css'

const MedicalCards = ({doctors}) => {

    return (
        <div className='medical-cards-group_container'>
            <div className='title-block'>
                <p>Доктор:</p>
            </div>
            <div className='list-group-card_container'>
                {
                    doctors.doctorsName.map(doctor => {

                        const descriptionDoctor = doctors.doctorsDescription.find(item => item.id_doctor === doctor.id)

                        return (
                            <div key={doctor.name} className='card-container'>
                                <div className='block-ava'>
                                    <img src={descriptionDoctor.avatar_user}/>
                                </div>
                                <div className='content-medical-cards'>
                                    <p>
                                        <span className='working-position'>{descriptionDoctor.working_position}</span>
                                    </p>
                                    <p>
                                        <span className='name-doctor-specialization'>{descriptionDoctor.specialization} {doctor.name}</span>
                                    </p>
                                    {/*<div className='block-description'>*/}
                                    {/*    <p></p>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MedicalCards
