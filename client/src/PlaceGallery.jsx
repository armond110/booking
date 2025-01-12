import { useState } from "react";
import Image from "./Image.jsx";
import axios from "axios";
import { Link } from "react-router";

export default function PlaceGallery({place}) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if(showAllPhotos) {
    return (
      <div className='absolute inset-0 bg-black text-white min-h-screen'>
      <div className="bg-black p-8 grid gap-4">
        <div>
          <h2 className="text-3xl text-center">Photos of {place.title}</h2>
        </div>
        <div>
          <button onClick={() => setShowAllPhotos(false)} className="fixed right-2 bottom-8 flex gap-1 py-2 px-4 rounded-2xl  shadow shadow-black bg-white text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            Close photos
          </button>
        </div>
      
      {place?.photos?.length > 0 && place.photos.map((photo, number) => (
        <div className="items-center mx-auto justify-center size-11/12  md:size-8/12 lg:size-1/4" key={number}>
          <img src={axios.defaults.baseURL + '/uploads/'+photo} alt="" />
        </div>
      ))}
      
      </div>
    </div>
    )
  }
  return (
    <>
    <div className="">
      <div className="grid md:grid-cols-2 overflow-hidden">
        <div>
          {place.photos?.[0] && (
            <div>
              <Image onClick={() => setShowAllPhotos(true)} className="w-full h-60 shrink-0 rounded-xl  items-center justify-center mx-auto" src={place.photos[0]} alt=""/>
            </div>
          )}
        </div>
        
      </div>
      <Link to={'/'} className="absolute md:hidden rounded-full border bg-white px-1 py-1  top-40 left-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </Link>
    </div>
    </>
  )
}