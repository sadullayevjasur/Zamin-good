import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
const contact = () => {
  return (
    <section className='contactus'>
       <h1>Aloqa</h1>
       <hr />
       <br />
    <div id="contact" className=" bg-white">
        
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 border-2 border-yellow-500 p-6">
        {/* contact Form Section */}
        <div className="border-r-2 border-yellow-500 pr-6">
          <h2 className="text-3xl font-bold text-black-500 mb-4">Aloqa</h2>
          <p className="text-gray-700 mb-6">
          Telefon raqami, elektron pochta manzili va ijtimoiy tarmoqlardagi sahifalaringizni kiritish.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                Ism
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ismingizni kiriting"
                className="w-full p-3 bg-yellow-400 text-black rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="pochtangizni kiriting"
                className="w-full p-3 bg-yellow-400 text-black rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                Telefon
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Tel raqamingizni kiriting"
                className="w-full p-3 bg-yellow-400 text-black rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
            <button
              type="submit"
              className=" block px-6 py-2 text-white font-semibold text-sm rounded-md bg-gradient-to-r from-orange-400 to-orange-600 shadow-md transform transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
            >
              Yuborish
            </button>
          </form>
        </div>

        {/* contact Info Section */}
        <div className="pl-6">
          <h2 className="text-3xl font-bold text-black -500 mb-4">Malumot</h2>
          <p className="text-gray-700 mb-6">
          Sizning fikr-mulohazalaringiz va savollaringiz biz uchun juda muhim. Har qanday murojaatingizga imkon qadar tez va to'liq javob berishga harakat qilamiz!
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center space-x-3">
              <span className="text-yellow-500 text-xl"><FaPhoneAlt/> </span>
              <span>+998 98 123 45 67</span>
            </li>
            <li className="flex  items-center space-x-3">
              <span className="text-yellow-500 text-xl"><MdEmail/> </span>
              <span> @gmail.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-yellow-500 text-xl"><FaLocationDot/> </span>
              <span>Jizzax SH , Zomin tuman</span>
              
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-yellow-500 text-xl"><FaMapLocationDot/> </span>
              <span>Lokatsiya</span>
              
            </li>
          </ul>
        </div>
      </div>
    </div><FaMapLocationDot/>
    </section>

  );
};

export default contact;


// function contact() {
//   return (
//     <div >



    

//       <section className="contactus text-gray-600 body-font ">
//      
//   <div className=" px-5 py-10 mx-auto ">
//     <div className="flex border-2 border-yellow-500 flex-wrap -m-4">
//       <div className="p-1 lg:w-1/2 md:w-full flex flex-wrap">
//             <h4>Aloqa</h4>
//             <hr />
          
//           <div className="flex-grow flex-wrap">
//             <p className="leading-relaxed text-base flex flex-wrap "></p>
//             <input type="text" placeholder='Name' /><br />
//             <input type="password" placeholder='Email' /><br />
//             <input type="number" placeholder='Phone' /><br />
//             <button className='order'>Yuborish</button>
//           </div>
        
//       </div>
//       <div className="p-1 flex flex-wrap">
//             <h4>Malumot</h4>
//             <hr />
          
//           <div className="flex flex-wrap">
//             <p className="leading-relaxed text-base"></p>
           
//           </div>
//           <div className=' flex-wrap flex bg-black'> 

//           <br />
//           <p style={{display:`flex` ,alignItems:`center`,margin:`0 5px`}} ><FaPhoneAlt /> +998977930920</p><br />
          
//           <br />

//             <p style={{display:`flex` ,flex:'wrap' , alignItems:`center`}}><MdEmail />jasurbeksadullayev994@gmail.com</p><br />
//             <br />
//             <p style={{display:`flex` , alignItems:`center`}}><FaLocationDot />Jizzax shaxar Zomin tuman</p><br />
//             </div>
        
//       </div>
//     </div>
//   </div>
// </section>

//     </div>
    
//   )
// }

// export default contact