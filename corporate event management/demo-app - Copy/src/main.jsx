import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import JobRegister from './pages/auth/reg'
import Login from './pages/auth/Login'
// import './index.css'
import './assets/css/index.css'
import BookingForm from './pages/user/bookings.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
