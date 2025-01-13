import { Link } from "react-router";
import axios from "axios";

export default function AllPlacesPage({places}) {
  function submit() {
    return
  }

  return (
    <div className="gap-6 gap-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4xl:grid-cols-5   px-4 md:px-20 text-left   py-20 md:py-6  "> 
      
      {places.length > 0 && places.map((place, index) => (
        <div>

            <p onclick={submit()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="relative size-7 w-7 rounded-lg top-10 left-4  font-semibold  text-yellow-300 bg-gray-900 opacity-70">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </p>

            {place.photos?.[0] && (
              <Link key={index} to={'/place/'+place._id}>
                <img className="  w-full h-60 rounded-xl   justify-center items-center mx-auto md:h-72 shrink-0  " src={axios.defaults.baseURL + '/uploads/'+place.photos[0]} alt=""/>
              </Link>
                
            )}
            

          <h3 className="font-bold  text-sm">{place.address}</h3>
          <h2 className="  text-gray-500 text-sm">{place.title}</h2>
          <div className=" text-sm"><span className="font-bold text-sm">${place.price}</span>  per night</div>
        </div>
      ))}
    </div>
  )
}