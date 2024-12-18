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
    <div>
      <AccountNav />
        <div className="text-center">
        <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Add new places
        </Link>
      </div>
      <div className="mt-4 px-8 py-5 ">
        {places.length > 0 && places.map((place, index) => (
          <Link key={index} to={'/account/places/' +place._id} className="md:flex cursor-pointer gap-4  p-4 rounded-2xl mt-2 md:bg-gray-300">
            <div className="flex w-72 md:w-80 h-32 md:h-80 lg:w-40 lg:h-32  shrink-0 items-center justify-center mx-auto">
              <PlaceImg place={place} className=""/>
            </div>
            <div className="grow-0 shrink text-center px-12">
              <h2 className="text-lg mt-8 md:mt-0 mb-4 ">{place.title}</h2>
              <p className="text-md mt-2 r hidden md:flex">{place.description}</p>
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  )
}