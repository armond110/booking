import { Link, useParams } from "react-router"
import { useState, useEffect } from "react";
import axios from "axios";
import AccountNav from "../AccountNav";
import PlaceBookingsImg from "../PlaceImgBookingsImg";
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
    <div className=" md:px-96    items-center mx-auto   mt-8 md:mt-0  mb-48 md:mb-96">
          <AccountNav />
          <div className="px-4 md:mt-12">
          <div className="flex md:mb-4 md:mt-3">
        <Link to={'/'} className=" md:hidden px-2 rounded-lg py-1 mb-1 bg-white border border-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <h1 className="md:hidden   bg-white  border-black text-black   text-xl ml-2  py-1  uppercase text-center">Booking information</h1>
        </div>
            
            
              <div  className="md:flex md:px-20  rounded-2xl items-center mx-auto justify-center overflow-hidden mt-2">
                <div className="w-full md:w-64 h-42 md:h-52 " >
                  <PlaceBookingsImg   place={booking.place} className=''/>
                </div>
                
                <div className="py-1 md:pr-3   grow md:ml-12  md:mt-0"> 
                  <h2 className="text-xl hidden md:block">Booking information: </h2>
                  
                <div className=" mt-2 md:mt-4  ">
                  <h2 className="text-lg flex " >Name:&nbsp; <p className="md:text-gray-500">{booking.name}</p></h2>
                  <h2 className="text-lg flex">Phone:&nbsp; <p className="md:text-gray-500">{booking.phone}</p></h2>
                    <div className="text-lg text-black flex">Number of guests: &nbsp; <p className="text-gray-500">{booking.numberOfGuests}</p></div>
                  <div className=" ">
                      <div className="flex gap-1 items-center text-gray-500">
                        <p className="text-lg text-black">Check-in: </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                    </svg>
                    <p className="text-lg">{format(booking.checkIn, 'dd-MM-yyyy')} </p>
                    </div>
                    </div>
                    
                     <div className="">
                     <div className="flex gap-1 items-center text-gray-500">
                     <p className="text-lg text-black">Check-out: </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                    </svg>
                    <p className="text-lg">{format(booking.checkOut, 'dd-MM-yyyy')}</p>
                    </div>
                     </div>
                  <div className="flex   md:block">
                  
                  <span className=" text-lg md:text-gray-500 flex">
                   <p className="text-black">Total price:&nbsp;</p> <p>${booking.price}</p> 
                  </span>
                  </div>
                </div>
              </div>
              </div>
            
          </div>
        </div>
  )
}