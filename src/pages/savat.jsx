import React, { useContext } from "react";
import { CartContext } from "../context/Cardcontext";

function Savat() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleOrder = (item) => {
    alert(`Buyurtma qabul qilindi: ${item.title}`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Savatdagi mahsulotlaringiz
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Savat bo'sh <b>"Burger"</b> sahifaga o'tib xarid qilishingiz mumkin</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Mahsulot rasmi */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              {/* Mahsulot ma'lumotlari */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <div className="flex justify-between items-center mt-4">
                 
                </div>
                {/* Tugmalar */}
                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className=" mx-1 px-1   py-2 text-white font-semibold text-sm rounded-md bg-gradient-to-r from-red-500 to-orange-600 shadow-md transform transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
                  >
                    Savatdan chiqarish
                  </button>
                  <button
                    onClick={() => handleOrder(item)}
                    className=" mx-1 py-2 px-1  text-white font-semibold text-sm rounded-md bg-gradient-to-r from-green-400 to-green-600 shadow-md transform transition-all duration-300 hover:scale-105  focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                  >
                    Buyurtma 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Savat;
