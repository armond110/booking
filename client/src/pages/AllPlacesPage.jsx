import { Link } from "react-router";
import axios from "axios";
import Carousel from "./Carousel";

export default function AllPlacesPage({places}) {
  
  
  
  /*
  {place.photos?.[0] && (
              <Link key={index} to={'/place/'+place._id}>
                <img className="  w-full h-60 rounded-xl  overflow-auto justify-center items-center mx-auto md:h-72 shrink-0  " src={axios.defaults.baseURL + '/uploads/'+place.photos[0]} alt=""/>
                
              </Link>
                
            )}
  */

  return (
    <div className="gap-6 gap-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4xl:grid-cols-5    md:px-20 text-left   py-20 md:py-6  "> 
      {places.length > 0 && places.map((place, i) => (
        <Link key={i} to={'/place/'+place._id} className="outline-none">
            
            {place.photos?.[0] && (
              
                <img className="  w-full h-60 px-2 md:px-0 rounded-2xl  overflow-auto justify-center items-center mx-auto md:h-72 shrink-0  " src={axios.defaults.baseURL + '/uploads/'+place.photos[0]} alt=""/>
              
            )}
            
             
          <h3 className="font-bold ml-2 md:ml-0 text-sm mt-2">{place.address}</h3>
          <h2 className="  text-gray-500 ml-2 md:ml-0 text-sm">{place.title}</h2>
          <div className=" text-sm ml-2 md:ml-0"><span className="font-bold text-sm">${place.price}</span>  per night</div>
        </Link>
      ))}
    </div>
  )
}