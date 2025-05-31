import React from 'react'
import heroBg from '../assets/images/hero.jpg';
import Button from './Button';
import { ChevronDown } from 'lucide-react';


const Hero = () => {
  return (
    <section className="w-[90%] mx-auto relative">
      <div className="w-full h-full">
        <img 
            src={heroBg} 
            alt="Hero image" 
            className="w-full h-[90vh] object-cover object center"
        />
        
        <div className="absolute inset-0 w-full h-full flex flex-col justify-end p-8 space-y-4 bg-black/10">
            <h1 className="text-3xl sm-text-4xl md:text-5xl font-extrabold max-w-2xl text-gray-200">
                Escape the Office and Work from Paradise Today
            </h1>
            <p className="text-gray-200 max-w-lg ">
               Tired of soul-crushing commutes and bland cubicles? Discover remote-ready cities with fast 
               Wi-Fi, low costs, and beaches on your doorstep.
            </p>

            <div className="w-full flex flex-col space-y-4 sm:flex-row items-start sm:space-x-4 mb-6">
                <Button 
                    label="Start Planning"
                    className="bg-gray-200 px-6 py-2 font-semibold cursor-pointer hover:bg-gray-300 delay-200
                    transition-colors"
                />

                <Button 
                    label="View Demo"
                    className="px-6 py-2 border border-gray-200 text-gray-200 font-semibold cursor-pointer
                    hover:text-black hover:bg-gray-300 delay-200 transition-colors"
                />

            </div>
            <div className="flex justify-center animate-bounce ">
                <ChevronDown 
                    size={20}
                    className="text-gray-200"
                />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
