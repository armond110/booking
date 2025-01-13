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
            <button onClick={() => setShowAllPhotos(false)} className="fixed right-11 bottom-8 flex gap-1 py-2 px-4 rounded-2xl  shadow shadow-black bg-white text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              Close photos
            </button>
          </div>
        
        {place?.photos?.length > 0 && place.photos.map((photo, number) => (
          <div className="items-center mx-auto justify-center size-11/12  md:size-8/12 lg:size-1/4 " key={number}>
            <img src={axios.defaults.baseURL + '/uploads/'+photo} alt="" />
          </div>
        ))}
        
        </div>
      </div>
    )
  }

  
  return (
    <div className=" mt-4 md:mt-8 md:px-10 lg:px-20 2xl:px-48  -my-8 px-4  ">
      <h1 className="text-3xl ">
        {place.title}
        </h1>
        <a className=" my-3 block flex font-semibold underline  " target="_blank" href={'https://maps.google.com/?q='+place.address}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        {place.address}
        </a>
        <div className="">
        <div className="md:grid md:gap-2 md:grid-cols-2 md:rounded-xl md:overflow-hidden ">
          <div className="">
            {place.photos?.[0] && (
              <div className="">
                <Link to={'/'} className="absolute md:hidden rounded-full bg-white px-1 py-1  top-28 left-7">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                </Link>
                
                <img onClick={() => setShowAllPhotos(true)} className="w-full h-full size-36 md:h-96  shrink-0  items-center justify-center mx-auto md:aspect-square md:object-cover cursor-pointer  rounded-2xl md:rounded-none  " src={axios.defaults.baseURL + '/uploads/'+place.photos[0]} alt=""/>
                
              </div>
              
            )}
            
        </div>
        <div className="hidden md:grid md:grid-cols-2">
          {place.photos?.[1] && (
            <img onClick={() => setShowAllPhotos(true)} className="w-full h-full size-36 md:h-48 right-1 cursor-pointer " src={axios.defaults.baseURL + '/uploads/'+place.photos[1]} alt=""/>
          )}
          {place.photos?.[2] && (
              <img onClick={() => setShowAllPhotos(true)} className="w-full h-full size-36 md:h-48 ml-1  cursor-pointer " src={axios.defaults.baseURL + '/uploads/'+place.photos[2]} alt=""/>
          )}
          {place.photos?.[3] && (
            <img onClick={() => setShowAllPhotos(true)} className="w-full h-full size-36 md:h-48 ml-1 relative cursor-pointer right-1  top-1" src={axios.defaults.baseURL + '/uploads/'+place.photos[3]} alt=""/>
          )}
          <div>{place.photos?.[4] && (
              <img onClick={() => setShowAllPhotos(true)} className="w-full h-full size-36 md:h-48 ml-1 relative top-1 cursor-pointer " src={axios.defaults.baseURL + '/uploads/'+place.photos[4]} alt=""/>
          )}
          
          </div>
          
        </div>
        
      </div>
      </div>
      <div>
      
      </div>
        <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr] ">
          <div>
            <div className="my-4">
              <p className="text-md md:text-xl font-semibold">About this place</p>
              <p className="text-sm md:text-lg">{place.description}</p>
            </div>
          <p className="text-sm md:text-lg flex"><p className="text-sm md:text-lg font-semibold ">Max number of guests :&nbsp;</p> {place.maxGuests}</p>
          {place.extraInfo && (
            <>
              <div className=" -mx-8 px-8 py-8 ">
                <div>
                <h2 className="text-md md:text-xl font-semibold">Extra info</h2>
                </div>
              <div className="mb-4 mt-2 text-sm md:text-lg  leading-5 ">
                {place.extraInfo}
              </div>
              </div>
            </>
          )}
        
      <h1 className="text-md md:text-xl font-semibold mb-4 mt-4">What you will find</h1>
      <section className="mb-24">
      {place.perks?.[0] && (
          <>
          <label className=" p-4 flex  gap-2 items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
            </svg>
            <span className="uppercase">wifi</span>
          </label>
          </>          
        )}
       
        {place.perks?.[1] && (
          <>
            <label className=" p-4 flex  gap-2 items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
            <span className="uppercase">free parking spot</span>
            </label>
            </>          
        )}
        
        {place.perks?.[2] && (
          <>
          <label className=" p-4 flex  gap-2 items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
            <span className="uppercase">tv</span>
          </label>
            </>          
        )}
               
        {place.perks?.[3] && (
          <>
          <label className=" p-4 flex  gap-2 items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
            </svg>
            <span className="uppercase">pets</span>
          </label>
          </>          
        )}
       
        {place.perks?.[4] && (
          <>
          <label className=" p-4 flex  gap-2 items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>
            <span className="uppercase">entrance</span>
          </label>
          </>          
        )}
      </section>
        
          </div>
          
          <div>
            <BookingWidget place={place}/>
          </div>
          
      </div>
        
    </div>
  )
}