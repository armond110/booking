import axios from "axios";
import {useState, useEffect } from "react";
import { useParams } from "react-router"
import BookingWidget from "../BookingWidget";


export default function PlacePage() {
  const {id} = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  
  
  useEffect(() => {
    if(!id) {
      return;
    }
    axios.get(`/places/${id}`).then(response => {
      setPlace(response.data);
    });
  }, [id]);
  if(!place) return '';
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
          <div className="items-center mx-auto justify-center size-100" key={number}>
            <img src={'http://localhost:3000/uploads/'+photo} alt="" />
          </div>
        ))}
        
        </div>
      </div>
    )
  }

  
  return (
    <div className="mt-8 bg-gray-50 -my-8 px-8   text-center">
      <h1 className="text-3xl">{place.title}</h1>
        <a className="gap-1 my-3 block flex font-semibold underline px-4 md:px-40" target="_blank" href={'https://maps.google.com/?q='+place.address}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        {place.address}
        </a>
        <div className="relative md:px-15 lg:px-24 ">
        <div className="md:grid md:gap-2 md:grid-cols-[2fr_2fr] md:rounded-3xl md:overflow-hidden ">
          <div className="">
            {place.photos?.[0] && (
              <div className="">
                <img onClick={() => setShowAllPhotos(true)} className="aspect-square object-cover cursor-pointer  rounded-2xl md:rounded-none  px-2 py-4 md:px-0 md:py-0" src={'http://localhost:3000/uploads/'+place.photos[0]} alt=""/>
                <button onClick={() => setShowAllPhotos(true)} className="flex gap-1 absolute bottom-6 md:bottom-2 right-8 lg:right-28  py-2 px-4  bg-white rounded-2xl shadow shadow-md shadow-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
        </svg>
        Show more photos
      </button>
              </div>
              
            )}
            
        </div>
        <div className="hidden md:grid md:grid-cols-2">
          {place.photos?.[1] && (
            <img onClick={() => setShowAllPhotos(true)} className="aspect-square object-cover relative right-1 cursor-pointer " src={'http://localhost:3000/uploads/'+place.photos[1]} alt=""/>
          )}
          {place.photos?.[2] && (
              <img onClick={() => setShowAllPhotos(true)} className="aspect-square object-cover relative  cursor-pointer " src={'http://localhost:3000/uploads/'+place.photos[2]} alt=""/>
          )}
          {place.photos?.[3] && (
            <img onClick={() => setShowAllPhotos(true)} className="aspect-square object-cover cursor-pointer right-1 relative top-1" src={'http://localhost:3000/uploads/'+place.photos[3]} alt=""/>
          )}
          <div>{place.photos?.[4] && (
              <img onClick={() => setShowAllPhotos(true)} className="aspect-square object-cover relative top-1 cursor-pointer " src={'http://localhost:3000/uploads/'+place.photos[4]} alt=""/>
          )}
          <button onClick={() => setShowAllPhotos(true)} className="flex gap-1 absolute bottom-2 right-2 lg:right-28  py-2 px-4  bg-white rounded-2xl shadow shadow-md shadow-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
        </svg>
        Show more photos
      </button>
          </div>
          
        </div>
        
      </div>
      </div>
      <div>
      
      </div>
        <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr] px-4 md:px-15 lg:px-40 ">
          <div>
          <div className="my-4">
            <h2 className="font-semibold text-lg md:text-2xl">Description</h2>
            <p className="text-sm md:text-lg">{place.description}</p>
          </div>
            <p className="text-sm md:text-lg">Max number of guests: {place.maxGuests}</p>
            
            
          </div>
          <div>
            <BookingWidget place={place}/>
          </div>
          
      </div>
        <div className="bg-white -mx-8 px-8 py-8 border-t">
          <div>
            <h2 className="font-semibold text-2xl">Extra info</h2>
          </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5 px-4 md:px-40">{place.extraInfo}</div>
      </div>
    </div>
  )
}