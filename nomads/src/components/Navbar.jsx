import React from 'react'
import { navLinks } from '../constants/index'
import Button from './Button';


const Navbar = () => {
  return (
    <nav className="w-full ">
       <div className="flex items-center justify-between w-[80%] mx-auto py-4 border-b border-gray-200">
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
                                {link.label}
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* login button */}
            <div className="space-x-4">
                <Button 
                    label="Log In"
                    className="cursor-pointer"
                />
                
                <Button 
                    label="Sign Up"
                    className="border px-6 py-2 border-gray-100 cursor-pointer"
                />
            </div>
       </div>
    </nav>
  )
}

export default Navbar
