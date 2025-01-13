import React, { useContext, useState } from 'react'
import Header from './pages/header'
import Burger from './pages/burger'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Abaut from './pages/abaut'
import Contact from './pages/contact'
import Savat from './pages/savat'
import Dashboard from './pages/dashboard'
import logo from './component/img/logo.png'
import { FaBars,FaUser , FaRegWindowClose} from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

function App() {

  const { currentUser } = useContext(AuthContext);
  const [menu , setMenu]= useState(false);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/signin' />
  }
  return (
    <div>
      <div className="containeron flex p-5  md:flex-row items-center justify-between">
        <NavLink to="/" ><img src={logo} alt="" className='logoimg' /></NavLink>


        <nav className="lg:flex  hidden   md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	 items-center text-base ">
          <NavLink to='/' className="mr-5 hover:text-gray-900">Bosh sahifa</NavLink>
          <NavLink to='/burger' className="mr-5 hover:text-gray-900">Burger</NavLink>
          <NavLink to='/abaut' className="mr-5 hover:text-gray-900">Biz haqimizda</NavLink>
          <NavLink to='/contact' className="mr-5 hover:text-gray-900">Aloqa</NavLink>
          
        </nav>
      {menu  && (
        
         <div className="link p-10  block ">
          <div className='mx-auto  w-50'>
              <button onClick={()=> setMenu(!menu)} className='btnx'><FaRegWindowClose/></button>
         
         <NavLink to='/' className="   block   hover:text-gray-100">Bosh sahifa</NavLink>
         <NavLink to='/burger' className=" block hover:text-gray-100">Burger</NavLink>
         <NavLink to='/abaut' className="block hover:text-gray-100">Biz haqimizda</NavLink>
         <NavLink to='/contact' className=" block hover:text-gray-100">Aloqa</NavLink>
         <div className='usersavat'>
           <NavLink className=' inline    to-orange-600' to="/dashboard"> <FaUser /></NavLink>
        <NavLink className=' inline  to-orange-600' to="/savat"> <SlBasket /></NavLink>
         </div>
        
          <NavLink to='/signup'><button class="px-6 m-1 block  py-2 text-white font-semibold text-sm rounded-md bg-gradient-to-r from-orange-400 to-orange-600 shadow-md transform transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
            Ro'yxatdan o'tish
          </button></NavLink>
          <NavLink to='/signin'><button class=" mx-auto block px-6 py-2 text-white font-semibold text-sm rounded-md bg-gradient-to-r from-orange-400 to-orange-600 shadow-md transform transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
            Kirish
          </button></NavLink>
          </div>
       
       </div>

      )}
        <div className=" lg:flex  hidden  justify-around w-1/1 ">

        <NavLink className=' my-3 mx-3 to-orange-600' to="/dashboard"> <FaUser /></NavLink>
        <NavLink className=' my-3 to-orange-600' to="/savat"> <SlBasket /></NavLink>
          <NavLink to='/signup'><button class="px-6 mx-5 py-2 text-white font-semibold text-sm rounded-md bg-gradient-to-r from-orange-400 to-orange-600 shadow-md transform transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
            Ro'yxatdan o'tish
          </button></NavLink>
          <NavLink to='/signin'><button class="px-6 py-2 text-white font-semibold text-sm rounded-md bg-gradient-to-r from-orange-400 to-orange-600 shadow-md transform transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
            Kirish
          </button></NavLink>



        </div>
        <button onClick={()=> setMenu(!menu)} className='menubtn lg:hidden block'>
          <FaBars  />
        </button>
      </div>
      <Routes>
        <Route element={<Burger />} path='/burger' />
        <Route element={<SignUp />} path='/signup' />
        <Route element={<SignIn />} path='/signin' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<Abaut />} path='/abaut' />
        <Route element={<Header />} path='/' />
        <Route element={<Savat />} path='/savat' />
        {/* <Route element={<Dashboard />} path='/dashboard' /> */}
        <Route element={<RequireAuth><Dashboard /></RequireAuth>} path='/dashboard' />

      </Routes>
    </div>
  )
}

export default App