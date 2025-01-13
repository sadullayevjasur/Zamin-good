import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/Cardcontext.jsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { NavLink } from "react-router-dom";

function Burger() {
  const [data, setBlog] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");  // Qidiruv uchun state
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const getData = async () => {
      const dataBase = await getDocs(collection(db, "burger"));
      const itemsList = dataBase.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlog(itemsList);
    };

    getData();
  }, []);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  // Qidiruv natijalarini filtrlash
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="burger">
          <h1>Mazali taom</h1>
          <hr />
        </div>
        
        {/* Qidiruv maydoni */}
        <div className="search-container mb-6 px-4 py-2">
          <input
            type="text"
            placeholder="Burger nomi bo'yicha qidiruv..."
            className="p-3 w-full md:w-1/3 border-2 border-gray-500 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden group transition-transform hover:scale-105"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-yellow-500 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                      {item.description}
                    </p>
                    <div className="mt-6 flex justify-between items-center">
                      {isInCart(item.id) ? (
                        <div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="mx-1 px-1 py-2 text-white font-semibold text-sm rounded-md bg-gradient-to-r from-red-500 to-orange-600 shadow-md transform transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
                          >
                            Savatdan chiqarish
                          </button>
                          <NavLink to='/savat'>
                            <button
                              onClick={() => addToCart(item)}
                              className="mx-1 py-2 px-1 my-2 text-white font-semibold text-sm rounded-md bg-gradient-to-r from-green-400 to-green-600 shadow-md transform transition-all duration-300 hover:scale-105  focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                            >
                              Savatga o'tish →
                            </button>
                          </NavLink>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item)}
                          className="mx-1 py-2 px-1 text-white font-semibold text-sm rounded-md bg-gradient-to-r from-green-400 to-green-600 shadow-md transform transition-all duration-300 hover:scale-105  focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                        >
                          Savatga + 🧺
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Burger;
