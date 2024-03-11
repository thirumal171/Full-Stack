import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './assets/css/about.css';
import { useNavigate } from 'react-router-dom';
import './assets/css/footer.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { lazy } from 'react'
import UserLayout from './pages/user/userLayout'
const LazyLayout = lazy(() => import("./components/LazyLayout"))
const LazyLogin = lazy(()=> import("./pages/auth/Login"))
const LazySignup = lazy(()=> import("./pages/auth/reg"))
const LazyHome = lazy(()=> import("./pages/user/Home"))
const LazyProfile = lazy(() => import("./pages/user/Profile"))
const LazyEvents = lazy(()=> import("./pages/user/event"));
const LazyAbout = lazy(()=> import("./pages/user/about"));  
const LazyContact = lazy(()=> import("./pages/user/contact"));  
const LazyBooking = lazy(() => import("./pages/user/bookings"));
const LazyAdmin = lazy(() => import("./pages/admin/Admin"))
const LazyDashboard = lazy(()=> import("../src/pages/admin/AdminDashboard"))
const LazyAdminBooking = lazy(()=> import("./pages/admin/BookingHistory"))
const LazyUserDetails = lazy(() => import("./pages/admin/ViewUser"))
const LazyDescription = lazy(()=>import("./pages/user/description"))
const LazyDescription1 = lazy(()=>import("./pages/user/description1"))
const LazyDescription2 = lazy(()=>import("./pages/user/description2"))
const LazyDescription3 = lazy(()=>import("./pages/user/description3"))

import AdminLayout from './pages/admin/AdminLayout';
// import { useNavigate } from 'react-router-dom';

const UserRoutes = () => {
  const navigate = useNavigate();
  return(
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
        {/* <Route path="/booking" element={<LazyLayout component={LazyBooking}/>}/> */}
        <Route path="/profile" element={<LazyLayout component={LazyProfile}/>}/>
        <Route path ="/Events" element ={<LazyLayout component={LazyEvents}/>}></Route>
        <Route path ="/about"element ={<LazyLayout component ={LazyAbout}/>}></Route>
        <Route path ="/about"element ={<LazyLayout component ={LazyAbout}/>}></Route>
        <Route path ="/contact"element ={<LazyLayout component ={LazyContact}/>}></Route>
        <Route path ="/booking"element ={<LazyLayout component ={LazyBooking}/>}></Route>
        <Route path="/description"element ={<LazyLayout component={LazyDescription}/>}></Route>
        <Route path="/description1"element ={<LazyLayout component={LazyDescription1}/>}></Route>
        <Route path="/description2"element ={<LazyLayout component={LazyDescription2}/>}></Route>

        <Route path="/description3"element ={<LazyLayout component={LazyDescription3}/>}></Route>

        {/* <Route path="/Admin" element={<LazyLayout component={LazyDashboard}/>}/> */}
        <Route path="/Admin" element={<Navigate to="/admin/DashBoard"/>}/>
        <Route path="/Logout" element={<Navigate to="/"/>}/>

      </Routes>
    </UserLayout>
  )
}

const AdminRoutes = () => {
  return (
    <AdminLayout>
    <Routes>
      <Route path="/home" element={<LazyLayout component={LazyAdmin}/>}/>
      {/* <Route path="/Bookings" element={<LazyLayout component={LazyAdmin}/>}/> */}
      <Route path="/DashBoard" element={<LazyLayout component={LazyDashboard}/>}/>
      <Route path="/Bookings" element={<LazyLayout component={LazyAdminBooking}/>}/>
      <Route path="/Users" element={<LazyLayout component={LazyUserDetails}/>}/>
      <Route path="/Logout" element={<Navigate to="/"/>}/>
    </Routes>
    {/* <Footer/> */}
  </AdminLayout>
)
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path="/" element={<LazyLayout component={LazyLogin}/>}/>
        <Route path="/signup" element={<LazyLayout component={LazySignup}/>}/>
        <Route path="/user/*" element={<UserRoutes/>}/>
        <Route path="/admin/*" element={<AdminRoutes/>}/>
      </Routes>
    </div>
    
    </BrowserRouter>
  )
}

export default App
