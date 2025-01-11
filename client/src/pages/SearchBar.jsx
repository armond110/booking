import { useState } from "react";


export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:3000/places")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((place) => {
          return (
            value &&
            place &&
            place.address &&
            place.address.toLowerCase().includes(value.toLowerCase())
             
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
       
    <form className="max-w-lg mx-auto px-8 py-0 md:mb-0 md:px-8 mt-4 ">   
      
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input value={input} onChange={(e) => handleChange(e.target.value)} type="search" id="default-search" className="block w-full shadow-xl md:shadow-none p-4 py-3 ps-10 text-sm text-gray-900 border border-gray-200 rounded-lg " placeholder="Search a place..." required />
        
      </div>
    </form>

  );
};