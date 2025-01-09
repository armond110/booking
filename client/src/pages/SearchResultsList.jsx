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
      {results.map((result) => {
        return (
            <form className=" max-w-xl   mx-auto  md:px-none ">   
              <div className="relative mt-1 border-b border-gray-200 h-12 md:h-8 bg-gray-50">
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