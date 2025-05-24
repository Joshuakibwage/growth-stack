import { useState } from 'react'
import { FcSearch } from "react-icons/fc";

const Search = ({onSearch}) => {

  const [city, setCity] = useState("");
  console.log(city)

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex items-center border border-neutral-700 rounded-full px-4 py-2">
      <input 
        type="text" 
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full focus:outline-none"
      />
      <button className="cursor-pointer">
        <FcSearch
          size={20}
        />
      </button>
    </form>
  )
}

export default Search
