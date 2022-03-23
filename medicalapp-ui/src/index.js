import React from 'react'
import ReactDOM from 'react-dom'
import './theme/styles/Main.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux'
import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'

// redux devtools
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
)

reportWebVitals()
