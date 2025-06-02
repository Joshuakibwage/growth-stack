import { useState } from 'react';
import { items } from '../constants/index';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const Accordion = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }


  return !items || (items.length === 0) ? "No items available" : (

    <section className="w-full py-24 flex flex-col space-y-4 justify-center items-center">
      {
        items.map((item, index) => (
            <div 
                key={index}
                className="w-[70%] mx-auto bg-gray-200 p-4 rounded-md"
            >
                <button 
                    className="font-semibold mb-2 text-gray-900 flex items-center gap-2 justify-between w-full cursor-pointer delay-200 transition-all ease-in-out"
                    onClick={() => handleToggle(index)}
                >
                    {item.title}
                    {openIndex === index ? <FaChevronUp size={20} className="text-gray-800"/> : <FaChevronDown size={20} className="text-gray-800"/>}
                </button>
                {
                    openIndex === index && (
                        <div className="">
                    <p className="text-gray-700">
                        {item.content}
                    </p>
                </div>
                    )
                }
            </div>
        ))
      }
    </section>
  )
}

export default Accordion
