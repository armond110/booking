import SearchResult from "./SearchResult";
import React, { useState } from 'react';

export default function SearchResultsList ({ results }) {

  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    setShowButton(!showButton);
  };

  
  return ( 
    <>
    {showButton && 
    <button onClick={toggleButton}>
      <div className="dropdown  overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] h-80 md:h-80 border-gray-200 bg-gray-50 opacity-90    ">
      {results.map((result, index) => {
        return (
            <form className=" max-w-xl   mx-auto  md:px-none " key={index}>   
              <div className="relative border-b  h-12 md:h-8 bg-white">
                <SearchResult id={result._id} result={result.title} location={result.address}/>
              </div>   
            </form>
        )
      })}
      </div>
    </button>
    }
    </>
  );
};