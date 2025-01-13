import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; 
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

function Dashboard() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', description: '', img: '' });
  const [editedItem, setEditedItem] = useState({ id: '', title: '', description: '', img: '' });
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Error message state

  const correctPassword = 'jasur'; // To'g'ri parol

  // Firebase'dan ma'lumotlarni olish
  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, 'burger'));
    setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    if (isPasswordCorrect) {
      fetchItems();
    }
  }, [isPasswordCorrect]);

  // Yangi item qo'shish
  const handleCreate = async () => {
    if (!newItem.title || !newItem.description || !newItem.img) {
      alert("Barcha maydonlarni to'ldiring!");
      return;
    }

    await addDoc(collection(db, 'burger'), {
      title: newItem.title,
      description: newItem.description,
      img: newItem.img,
    });

    fetchItems();
    setNewItem({ title: '', description: '', img: '' });
  };

  // Itemni tahrirlash
  const handleEdit = (item) => {
    setEditedItem(item);
  };

  const handleSave = async () => {
    const itemRef = doc(db, 'burger', editedItem.id);
    await updateDoc(itemRef, {
      title: editedItem.title,
      description: editedItem.description,
      img: editedItem.img,
    });
    fetchItems();
    setEditedItem({ id: '', title: '', description: '', img: '' });
  };

  // Itemni o'chirish
  const handleDelete = async (id) => {
    const itemRef = doc(db, 'burger', id);
    await deleteDoc(itemRef);
    fetchItems();
  };

  // Parolni tekshirish
  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsPasswordCorrect(true);
      setErrorMessage(''); // Error message ni tozalash
    } else {
      setErrorMessage('Noto‘g‘ri parol!'); // Error message ko'rsatish
    }
  };

  return (
    <div className="min-h-full ">
      <nav className="bg-gray-800 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="shrink-0">
                <img class="size-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFH6ZObO8B4i4oJJbWi6YOEp5EV3zgEl87A&s" alt="" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">

                  <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Dashboard</a>

                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                  </svg>
                </button>

                <div className="relative ml-3">
                  <div>
                    <button type="button" className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span class="absolute -inset-1.5"></span>
                      <span class="sr-only">Open user menu</span>
                      <img class="size-8 rounded-full" src="data:image/png;base64,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" alt="" />
                    </button>
                  </div>


                  {/* <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                </div> */}
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button type="button" class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="md:hidden" id="mobile-menu ">
          <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>

          </div>
          <div class="border-t border-gray-700 pb-3 pt-4">
            <div class="flex items-center px-5">
              <div class="shrink-0">
                <img class="size-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFH6ZObO8B4i4oJJbWi6YOEp5EV3zgEl87A&s" alt="" />
              </div>
              <div class="ml-3">
                <div class="text-base/5 font-medium text-white">Jasur</div>
                <div class="text-sm font-medium text-gray-400">sadullayev@gmail.com</div>
              </div>
              <button type="button" class="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">View notifications</span>
                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </nav>

      <div class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-mono   tracking-tight text-gray-900">Dashboard </h1>
        </div>
      </div>
      <div>
        <div className="min-h-screen bg-gray-100 py-10 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 ">
          <h1 className="text-3xl font-mono text-center mx-auto"><b className=' to-green-500'>'Burger'</b> sahifa malumotlarini boshqarish paneli</h1>
          <div className=" mx-auto p-5">
            {!isPasswordCorrect ? (
              // Agar parol to'g'ri bo'lmasa, faqat parol kiriting
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-serif to-black- mb-4">Malumotlarni boshqarish uchun parolni kiriting</h2>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 mb-4 border rounded-md"
                  placeholder="parolni kiriting"
                />
                {errorMessage && (
              <div className="text-red-500 ">{errorMessage}</div> // Xato xabar
            )}
                <button
                  onClick={handlePasswordSubmit}
                  className="mx-auto block px-6 py-2 text-white font-semibold text-sm rounded-md bg-gradient-to-r from-orange-400 to-orange-600 shadow-md transform transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                >
                 Kirish
                </button>


              </div>
            ) : (
              // Parol to'g'ri bo'lsa, ma'lumotlarni ko'rsatish
              <>
                

                {/* Yangi item qo'shish */}
                <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-4">Yangi malumot qo'shing</h2>
                  <input
                    type="text"
                    value={newItem.title}
                    onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                    className="w-full p-3 mb-4 border rounded-md"
                    placeholder="Sarlavha"
                  />
                  <input
                    type="text"
                    value={newItem.description}
                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                    className="w-full p-3 mb-4 border rounded-md"
                    placeholder="Tavsif"
                  />
                  <input
                    type="text"
                    value={newItem.img}
                    onChange={(e) => setNewItem({ ...newItem, img: e.target.value })}
                    className="w-full p-3 mb-4 border rounded-md"
                    placeholder="Rasm Url"
                  />
                  <button
                    onClick={handleCreate}
                    className="mx-auto block px-6 py-2 text-white font-semibold text-sm rounded-md bg-gradient-to-r from-orange-400 to-orange-600 shadow-md transform transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                  >
                    Qo'shish
                  </button>
                </div>

                {/* Ma'lumotlar ro'yxati */}
                <ul className="flex flex-wrap ">
                  {items.map(item => (
                    <li key={item.id} className="m-3 bg-white rounded-lg shadow-md p-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h2>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                      <div className="flex justify-between">
                        <button
                          onClick={() => handleEdit(item)}
                          className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition">
                          Tahrirlash
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition">
                          O'chirish
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Edit qismi */}
                {editedItem.id && (
                  <div className="mt-8 bg-white p-6 rounded-lg shadow-md   left-10 bottom-0">
                    <h2 className="text-xl font-bold mb-4">Tahrirlash</h2>
                    <input
                      type="text"
                      value={editedItem.title}
                      onChange={(e) => setEditedItem({ ...editedItem, title: e.target.value })}
                      className="w-full p-3 mb-4 border rounded-md"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      value={editedItem.description}
                      onChange={(e) => setEditedItem({ ...editedItem, description: e.target.value })}
                      className="w-full p-3 mb-4 border rounded-md"
                      placeholder="Description"
                    />
                    <input
                      type="text"
                      value={editedItem.img}
                      onChange={(e) => setEditedItem({ ...editedItem, img: e.target.value })}
                      className="w-full p-3 mb-4 border rounded-md"
                      placeholder="Image URL"
                    />
                    <button
                      onClick={handleSave}
                      className="mx-auto block px-6 py-2 text-white font-semibold text-sm rounded-md bg-gradient-to-r from-orange-400 to-orange-600 shadow-md transform transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                    >
                      Saqlash
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

        </div>
      </div>
    </div>

  );
}

export default Dashboard;
