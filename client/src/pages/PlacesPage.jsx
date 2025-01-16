import { Link, useParams } from "react-router";
import AccountNav from "../AccountNav";
import { useState, useEffect } from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg";

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get('/user-places').then(({data}) => {
      setPlaces(data);
    });
  }, [],)
  return (
    <div className="mt-8 px-4  mb-24 md:mt-0 md:px-10 lg:px-20">
      <AccountNav />
        <div className="text-center">
        <div className="flex md:mb-4 md:mt-3">
        <Link to={'/'} className=" md:hidden px-2 rounded-lg py-1 mb-1 bg-white border border-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <h1 className="md:hidden   bg-white  border-black text-black   text-xl ml-2  py-1  uppercase text-center">My Accomodations</h1>
        </div>
        <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Add new places
        </Link>
        
      </div>
      <div className="md:mt-4  md:py-5 mt-8">
        {places.length > 0 && places.map((place, index) => (
          <Link key={index} to={'/account/places/' +place._id} className="md:flex cursor-pointer gap-4   rounded-2xl mt-2 md:bg-gray-50">
            <div className="md:flex">
              <PlaceImg place={place} className="rounded-xl"/>
              <div className="grow-0 shrink text-center md:px-12">
              <h2 className="text-lg mb-2 md:mb-0  md:mt-0 font-semibold">{place.title}</h2>
              <p className="text-md mt-2 r hidden md:flex ">{place.description}</p>
            </div>
            </div>
            
            
          </Link>
          
        ))}
      </div>
    </div>
  )
}