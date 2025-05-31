import React, { useState } from 'react'
import { navLinks } from '../constants/index'
import Button from './Button';
import {Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <nav className="w-full ">
       <div className="flex items-center justify-between w-[90%] mx-auto py-4 border-b border-gray-200">
            <div>
            
            {/* logo */}
            <h1>
                Nomads
            </h1>
            </div>

            {/* desktop navigation */}
            <div className="hidden md:block">
                <ul className="flex gap-5">
                    {
                        navLinks.map((link, idx) => (
                            <li key={idx}>
                               <Link to={link.path}>
                                    {link.label}
                               </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* login button */}
            <div className="space-x-4  hidden md:block">
                <Button 
                    label="Log In"
                    className="cursor-pointer"
                />
                
                <Button 
                    label="Sign Up"
                    className="border px-6 py-2 border-gray-100 cursor-pointer"
                />
            </div>
            <button 
                onClick={handleNav}
                className="md:hidden cursor-pointer hover:bg-gray-200 p-2 delay-200"
            >
               {
                nav ? (<X size={20}/>) : (<Menu size={20}/>)
               } 
            </button>
       </div>

       {/* mobile nav */}
       <div className="">
            {
                nav && (
                    <nav className="flex flex-col items-center justify-center w-full z-40">
                        <div className="flex md:hidden">
                            <ul className="flex flex-col space-y-4">
                                {
                                    navLinks.map((link, idx) => (
                                        <li 
                                        key={idx}
                                        className="text-xl font-semibold"
                                        onClick={handleNav}
                                        >
                                            {link.label}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* login button */}
                        <div className="w-full space-x-4 flex md:hidden flex-col items-center justify-center">
                            <Button 
                                label="Log In"
                                className="cursor-pointer"
                            />
                            
                            <Button 
                                label="Sign Up"
                                className="border px-6 py-2 border-gray-100 cursor-pointer"
                            />
                        </div>
                    </nav>
                )
            }
       </div>
    </nav>
  )
}

export default Navbar
