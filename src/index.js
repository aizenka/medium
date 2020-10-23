import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'routes'
import Topbar from 'components/topBar'
import { CurrentUserProvider } from 'contexts/currentUser'

const App = () => {
  return (
    <CurrentUserProvider>
      <Router>
        <Topbar />
        <Routes />
      </Router>
    </CurrentUserProvider>
  )
}

// {/* <React.StrictMode> */}
ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
)
