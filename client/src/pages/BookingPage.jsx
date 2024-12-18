import { useParams } from "react-router"
import { useState, useEffect } from "react";
import axios from "axios";
import AccountNav from "../AccountNav";
import PlaceGallery from "../PlaceGallery";


export default function BookingPage() {
  const [booking, setBooking] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    if(id) {
      axios.get('/bookings').then(response => {
        const foundBooking = response.data.find(({_id}) => _id === id);
        if(foundBooking){
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if(!booking) {
    return '';
  }
  
  return(
    <div>
      <AccountNav />
      <div className="my-8 px-4 lg:">
      <h1 className="text-3xl text-center">{booking.place.title}</h1>
      <h1 className="my-2 block text-center">{booking.place.address}</h1>

      <div className="grid md:grid-cols-2 justify-center mx-auto items-center px-4 ">
      
        <div className="justify-center mx-auto items-center md:mr-4">
        <PlaceGallery place={booking.place} />
        </div>
        <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between md:px-16 ">
        <div>
          <h2 className="text-2xl ">Your booking information:</h2>
          <h1 booking={booking}></h1>
        </div>
        <div className="bg-primary p-4 text-white rounded-xl">
          <div className="text-center md:block">Total price</div>
          <div className="text-3xl">${booking.price}</div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}