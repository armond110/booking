import axios from "axios"
import React, { useEffect, useState } from "react"
import AllPlacesPage from "./AllPlacesPage";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";


export default function IndexPage() {
  const [placesPage, setPlacesPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [placesPerPage] = useState(20);
  const [results, setResults] = useState([]);


  useEffect(() => {
    axios.get('/places').then(response => {
      setPlacesPage(response.data)
      
    })
  }, []);

  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPage = indexOfLastPlace - placesPerPage;
  const currentPages = placesPage.slice(indexOfFirstPage, indexOfLastPlace);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  function prevPage() {
    if(currentPage > 1) {
      paginate(currentPage - 1); 
    }
      
  }
  function nextPage() {
    if(currentPage < 2 ) {
      paginate(currentPage + 1); 
    }
}
  return (
  <div className=" text-center ">
    <div className="fixed md:sticky w-full h-18 md:h-0 mb-12 ">
        <SearchBar setResults={setResults} />  
        <div className="px-4">
        {results && results.length > 0 && <SearchResultsList results={results} />}  
        </div>
 
    </div> 
    
    
    <AllPlacesPage places={currentPages}/>
    <ul className="inline-flex -space-x-px text-base h-10 mb-8">
    <li>
      <a onClick={() => prevPage()} href='#' className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-gray-500 border border-gray-300 hover:bg-black hover:text-white  ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
        <p className="mr-2">Prev</p>
      </a>
    </li>
    <Pagination
        postsPerPage={placesPerPage}
        totalPosts={placesPage.length}
        paginate={paginate}
    />
    <li>
      <a onClick={() => nextPage()} href='#' className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-gray-500 border border-gray-300 hover:bg-black hover:text-white  ml-1">
      
        <p className="ml-2">Next</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
      </a>
    </li>
    </ul>
  </div>
  )
}