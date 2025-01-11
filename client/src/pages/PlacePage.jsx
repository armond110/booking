import axios from "axios";
import {useState, useEffect } from "react";
import { Link, useParams } from "react-router"
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
            <button onClick={() => setShowAllPhotos(false)} className="fixed right-8 bottom-8 flex gap-1 py-2 px-4 rounded-2xl  shadow shadow-black bg-white text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              Close photos
            </button>
          </div>
        
        {place?.photos?.length > 0 && place.photos.map((photo, number) => (
          <div className="items-center mx-auto justify-center size-100" key={number}>
            <img src={axios.defaults.baseURL + '/uploads/'+photo} alt="" />
          </div>
        ))}
        
        </div>
      </div>
    )
  }

  
  return (
    <div className=" mt-4 md:mt-8 bg-gray-50 -my-8 px-8  text-center">
      <h1 className="text-3xl ">
        {place.title}
        </h1>
        <a className="gap-1 my-3 block flex font-semibold underline px-4 md:px-40" target="_blank" href={'https://maps.google.com/?q='+place.address}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        {place.address}
        </a>
        <div className=" md:px-15 lg:px-40 ">
        <div className="md:grid md:gap-2 md:grid-cols-[2fr_2fr] md:rounded-3xl md:overflow-hidden ">
          <div className="">
            {place.photos?.[0] && (
              <div className="">
                <Link to={'/'} className="absolute md:hidden rounded-full bg-white px-1 py-1 bottom-2 top-32 left-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                </Link>
                
                <img onClick={() => setShowAllPhotos(true)} className="md:aspect-square object-cover cursor-pointer  rounded-2xl md:rounded-none  " src={axios.defaults.baseURL + '/uploads/'+place.photos[0]} alt=""/>
                
              </div>
              
            )}
            
        </div>
        <div className="hidden md:grid md:grid-cols-2">
          {place.photos?.[1] && (
            <img onClick={() => setShowAllPhotos(true)} className="aspect-square object-cover right-1 cursor-pointer " src={axios.defaults.baseURL + '/uploads/'+place.photos[1]} alt=""/>
          )}
          {place.photos?.[2] && (
              <img onClick={() => setShowAllPhotos(true)} className="aspect-square object-cover ml-1  cursor-pointer " src={axios.defaults.baseURL + '/uploads/'+place.photos[2]} alt=""/>
          )}
          {place.photos?.[3] && (
            <img onClick={() => setShowAllPhotos(true)} className="aspect-square object-cover ml-1 relative cursor-pointer right-1  top-1" src={axios.defaults.baseURL + '/uploads/'+place.photos[3]} alt=""/>
          )}
          <div>{place.photos?.[4] && (
              <img onClick={() => setShowAllPhotos(true)} className="aspect-square object-cover ml-1 relative top-1 cursor-pointer " src={axios.defaults.baseURL + '/uploads/'+place.photos[4]} alt=""/>
          )}
          
          </div>
          
        </div>
        
      </div>
      </div>
      <div>
      
      </div>
        <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr] px-0 md:px-15 lg:px-40 ">
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