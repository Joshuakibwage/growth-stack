import React from 'react'
import hammock from '../assets/images/hammock-2.jpg';


const SocialProof = () => {
  return (
    <section className="py-28 w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
      <div className="max-w-xl space-y-4 p-2">
        <div className="w-12 h-2 bg-gray-300"/>
        <h2 className="text-2xl font-bold md:text-5xl">
          You wanted <span className="text-gray-400">freedom. </span> 
          Instead, you got <span className="text-gray-400">friction.</span> 
        </h2>
        <p className="text-gray-600">
          The old way of planning remote life is outdated, disconnected, and inefficient. You’re wasting 
          precious time on tasks tech should handle. 
        </p>

         <div>
        <h3 className="mb-12 text-gray-500 font-semibold text-3xl">How it's slowing you down:</h3>

          <div className="grid grid-cols-2 gap-4 ">
            <div className="p-6 bg-gray-100 rounded-sm space-y-2 hover:-translate-y-1 delay-200 hover:shadow-sm ease-in-out transition-all">
              <div className="text-4xl">📊 </div>
              <p className="text-sm text-gray-600">
                 Juggling Notion boards, Google Sheets & blogs
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-sm space-y-2 hover:-translate-y-1 delay-200 hover:shadow-sm ease-in-out transition-all">
              <div className="text-4xl">🌐</div>
              <p className="text-sm text-gray-600">
                Conflicting info about costs, visas, & internet
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-sm space-y-2 hover:-translate-y-1 delay-200 hover:shadow-sm ease-in-out transition-all">
              <div className="text-4xl"> 📅 </div>
              <p className="text-sm text-gray-600">
                No long-term plan just reacting city by city
              </p>
            </div>
            <dv className="p-6 bg-gray-100 rounded-sm space-y-2 hover:-translate-y-1 delay-200 hover:shadow-sm ease-in-out transition-all">
              <div className="text-4xl">🚫 </div>
              <p className="text-sm text-gray-600">
                No way to scale your lifestyle
              </p>
            </dv>
          </div>
        
        </div>
      </div>

      <div className="max-w-xl rounded-md overflow-hidden">
          <img 
            src={hammock} 
            alt="Girl on hammock" 
            className="w-full h-[400px] sm:h-[550px] object-cover object-center shadow-xl"
            loading="lazy"
          />
      </div> 
     
      
    </section>
  )
}

export default SocialProof
