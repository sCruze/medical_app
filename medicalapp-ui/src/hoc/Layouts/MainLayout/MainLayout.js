import './MainLayout.css'
import {Footer} from '../../../components/home/Footer/Footer'

// Main Layout
const MainLayout = ({children}) => {
    return (
        <div className="main-layout-container">
            <main>
                { children }
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
