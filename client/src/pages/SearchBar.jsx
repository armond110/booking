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
       
      
<form className="max-w-sm mx-auto mt-4 px-2 md:px-none">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
    <div className="relative border border-gray-400">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input value={input} onChange={(e) => handleChange(e.target.value)} type="search" id="default-search" className="w-full p-4 ps-10 text-sm  bg-gray-100 text-black " placeholder="Search a place" required />
        
    </div>
</form>

  );
};