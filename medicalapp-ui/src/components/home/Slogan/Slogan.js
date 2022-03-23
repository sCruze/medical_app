import './Slogan.css'

const Slogan = ({slogan}) => {

    return (
        <div className='slogan-container'>
            <span className='slogan-title_container'>
                <h2>Вы выбрали нас. Почему вы сделали правильный выбор?</h2>
            </span>
            <ul>
                {
                    slogan.map(item =>
                        <li key={item.slogan_header}>
                            <span className='img-container'><img src={item.icon} alt=""/></span>
                            <span className='slogan-title'>{item.slogan_header}</span>
                            <span className='slogan-description'><p>{item.slogan_description}</p></span>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Slogan
