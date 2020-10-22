import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'routes'
import Topbar from 'components/topBar'
const App = () => {
  return (
    <div>
      <Router>
        <Topbar />
        <Routes />
      </Router>
    </div>
  )
}

// {/* <React.StrictMode> */}
ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
)
