import React from 'react'
import img from '../component/img/abautburger.png'

function abaut() {
  return (

  
    <div className='Abaut'>
      

      <section class="text-gray-600 body-font">
        <h1 >Burger haqida</h1>
        <hr />
        <div class="container mx-auto flex px-1 py-10 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-10/8  ">
            <img class=" rounded-lg" alt="hero" src={img} />
          </div>
          <div class="lg:flex-grow lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h5 style={{ fontFamily: `cursive` }} class="title-font sm:text-2xl  font-medium text-gray-900">Mazali burger
            </h5>
            <  hr style={{ width: `100%` }} />
            <p class="mb-8 leading-relaxed">
              <b>Tarixi va Turlari: </b>
              Burger — bu dunyoning turli burchaklarida mashhur bo'lgan, oddiy va mazali taom. Uning tarixi XX asrning boshlariga borib taqaladi, Amerika Qo'shma Shtatlarida paydo bo'lganligi haqida ko'p gapiriladi. Birinchi burger, odatda, 1900-yillarning boshlarida tayyorlangan deb hisoblanadi va u tezda ommalashdi. <br />
             <b> Burger Turlari </b>
              Bugungi kunda burgerlar juda ko'p turlarda mavjud. Klassik cheeseburger, qiyshiq qozonlarda tayyorlangan vegi burgerlar va hatto turli xil go'shtlardan tayyorlangan gourmet burgerlar ham bor. Har bir turli burger o'ziga xos ta’m va uslubga ega bo'lib, iste'molchilarga ko'p tanlov imkoniyatini taqdim etadi. <br />
             <b> Ingredientlar </b>
              Burger tayyorlashda asosiy ingredientlar — go'sht, non, pishloq va turli xil sabzavotlar. Go'sht odatda mol go'shti, tovuq yoki baliq bo'lishi mumkin. Non sifatida yumshoq, qizartirilgan burger noni ishlatiladi. Pishloq, ayniqsa cheddar, burgerni yanada mazali qiladi. Sabzavotlar esa (salat, pomidor, piyoz) ta’mga yangi va tetiklik qo'shadi.
            </p>
            <div class="flex justify-center">
              <button class="  block px-6 py-2 text-white font-semibold text-sm rounded-md bg-gradient-to-r from-orange-400 to-orange-600 shadow-md transform transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 ">Batafsil. . . </button>
            </div>
          </div>
        </div>
      </section>

    </div>
    

  )
}

export default abaut