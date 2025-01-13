import { Link } from "react-router";
import axios from "axios";

export default function AllPlacesPage({places}) {

  return (
    <div className="gap-6 gap-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4xl:grid-cols-5   px-4 md:px-20 text-left   py-20 md:py-6  "> 
      
      {places.length > 0 && places.map((place, index) => (
        <Link key={index} to={'/place/'+place._id}>
          {place.price > 95 && (
            <p className="absolute bg-white rounded-lg ml-4 mt-4  text-center px-2 font-semibold">Loved by guests</p>
          )}
          
            {place.photos?.[0] && (
                <img className="  w-full h-60 rounded-xl   justify-center items-center mx-auto md:h-72 shrink-0  " src={axios.defaults.baseURL + '/uploads/'+place.photos[0]} alt=""/>
                
            
            )}
            

          <h3 className="font-bold  text-sm">{place.address}</h3>
          <h2 className="  text-gray-500 text-sm">{place.title}</h2>
          <div className=" text-sm"><span className="font-bold text-sm">${place.price}</span>  per night</div>
        </Link>
      ))}
    </div>
  )
}