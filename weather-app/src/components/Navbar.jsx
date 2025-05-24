import React from 'react'
import Search from './Search';


const Navbar = () => {
  return (
    <nav className="text-white w-[80%] mx-auto py-4 flex justify-between">
      <div>
        <h1 className="font-bold text-2xl">
            Weather<span>App</span>
        </h1>
      </div>
      <div className="w-[70%]">
        <Search />
      </div>
      <div>
        <button className="border border-neutral-700 px-6 py-2 rounded-full cursor-pointer">
            Sing Up
        </button>
      </div>
    </nav>
  )
}

export default Navbar
