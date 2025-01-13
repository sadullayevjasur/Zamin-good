import React, { useContext, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
function signUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext)



    const onSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Iltimos, barcha maydonlarni to'ldiring.");
            return;
        }
        if (password.length < 6) {
            setError("Parol kamida 6 ta belgidan iborat bo'lishi kerak.");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: true });
                navigate('/dashboard');

                console.log(user);

            })
            .catch((error) => {
                const errorMessage = error.message;

                console.log(errorMessage);

            });
    }

    return (
        <section className="text-gray-600 body-font bg-gradient-to-r from-yellow-500 to-orange-300">
            <div className=" px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="text-[clamp(2rem, 5vw, 2rem)] font-bold">Ro'yxatdan o'tganingizdan so'ng, eksklyuziv chegirmalar va maxsus takliflardan foydalaning.</h1>
                </div>
                <form onSubmit={onSubmit} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Ro'yxatdan o'tish</h2>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border
                             border-gray-300 focus:border-indigo-500 focus:ring-2 
                             focus:ring-indigo-200 text-base outline-none text-gray-700
                              py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="password" className="leading-7 text-sm text-gray-600">parol</label>
                        <input type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            id="full-name"
                            name="full-name"
                            className="w-full bg-white rounded border border-gray-300
                             focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                             text-base outline-none text-gray-700 py-1 px-3 leading-8 
                             transition-colors duration-200 ease-in-out" />
                    </div>
                    <button type='submit' class="px-6 py-2 text-white font-semibold text-sm rounded-md bg-gradient-to-r from-orange-400 to-orange-600 shadow-md transform transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
                        Yuborish
                    </button>
                </form>
            </div>
        </section>
    )


}

export default signUp