import { useParams } from "react-router"
import { useState, useEffect } from "react";
import axios from "axios";
import AccountNav from "../AccountNav";
import PlaceGallery from "../PlaceGallery";
import {differenceInCalendarDays, format} from 'date-fns'




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
        <div className=" p-6 my-6 rounded-2xl  items-center justify-between md:px-16 ">
        <div>
          <h2 className="text-lg md:text-xl text-center">Your booking information:</h2>
          <h1 booking={booking}></h1>
        </div>
        <div className="p-2 rounded-xl">
          <div className="text-center  md:block md:text-lg">Total price: ${booking.price}</div>
          <div className="text-center  md:block md:text-lg">Number of nights: {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))}</div>
          <div className="text-center mt-4 text-sm md:block">
          From {format(new Date(booking.checkIn), 'dd-MM-yyyy')}      
          </div>
          <div className="text-center text-sm  md:block">
          to {format(new Date(booking.checkOut), 'dd-MM-yyyy')}
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}