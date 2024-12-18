import axios from "axios"
import React, { useEffect, useState } from "react"
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";
import AllPlacesPage from "./AllPlacesPage";
import Pagination from "./Pagination";



export default function IndexPage() {
  const [results, setResults] = useState([]);
  const [placesPage, setPlacesPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [placesPerPage] = useState(15);
  
  
  useEffect(() => {
    axios.get('/places').then(response => {
      setPlacesPage(response.data)
      
    })
  }, []);

  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPage = indexOfLastPlace - placesPerPage;
  const currentPages = placesPage.slice(indexOfFirstPage, indexOfLastPlace);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
  <div className=" text-center ">

      
          
    <AllPlacesPage places={currentPages}/>
    <Pagination
        postsPerPage={placesPerPage}
        totalPosts={placesPage.length}
        paginate={paginate}
      />
  </div>
  )
}