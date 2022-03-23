import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Styles
import './fonts/theme.scss'

// Pages
import HomePage from './pages/HomePage/Home'

function App(props) {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage props={props} />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App

// export default connect(mapStateToProps, mapDispatchToProps)(App)
