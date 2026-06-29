import React, { useEffect, useRef, useState } from 'react'
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import burger from '../component/img/burgerimg.png';
import cola from '../component/img/cola.png';
import { GiHamburger, GiFrenchFries } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import Abaut from '../pages/abaut.jsx'
import Contact from '../pages/contact.jsx'
import { NavLink } from 'react-router-dom';





function header() {



  return (
    <div>







      <header className="text-gray-900 ">
        <section className='section sectionname '>
          <div className="content flex flex-wrap" >
            <div className="malumot">
              <h1 className='h1   '>Super Mazali
                <br /><span>Burger</span>
              </h1>
              <p><b>Zamin Food</b> - eng yaxshi  taomlarni taqdim etuvchi  restoran. Sizni mazali va sifatli taomlar kutmoqda!
              </p>
              <div className=' btnorder flex  '>
                <NavLink to='/BURGER'><button type='submit' className='my-3 block px-6 py-2 text-white font-semibold text-sm rounded-md bg-gradient-to-r from-orange-400 to-orange-600 shadow-md transform transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75'>Buyurtma berish</button></NavLink>

                <div className='flex m-5' >
                  <a href=""><FaTelegramPlane style={{ fontSize: `20px` }} /></a>
                  <a href=""><FaInstagram style={{ color: `black`, fontSize: `20px`, margin: `0px 16px` }} />
                  </a>

                </div>
              </div>
            </div>

            <div className="img">
              <img src={burger} alt="" />
            </div>
          </div>
        </section>
      </header>

      <div className="offers p-10">
        <h2>Taklif qiladi</h2>
        <hr />

        <section className="text-gray-600 body-font">
          <div className="container   mx-auto">

            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-yellow-400 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-black w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <GiHamburger />

                  </svg>
                  <h3 className="title-font font-medium text-3xl text-gray-900">2.7K</h3>
                  <p className="leading-relaxed">Burger 50% chegirma</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-yellow-400 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-black w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <TbTruckDelivery />
                  </svg>
                  <h3 className="title-font font-medium text-3xl text-gray-900">1.3K</h3>
                  <p className="leading-relaxed">Bepul yetkazib berish</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-yellow-400 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-black w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <GiFrenchFries />
                  </svg>
                  <h3 className="title-font font-medium text-3xl text-gray-900">74</h3>
                  <p className="leading-relaxed">Burger bepul kartoshka</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-yellow-400 px-4 py-5 rounded-lg">
                  <img src={cola} alt="" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-8 h-8 mb-3 inline-block" viewBox="0 0 24 24" />
                  <h3 className="title-font font-medium text-3xl text-gray-900">46</h3>
                  <p className="leading-relaxed">Ko'proq burger bepul sovuq ichimlik</p>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
      <Abaut />
      <Contact />
    </div >


  )

}

export default header