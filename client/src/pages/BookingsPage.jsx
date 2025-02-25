import { useState, useEffect } from "react";
import {differenceInCalendarDays, format} from 'date-fns'
import AccountNav from "../AccountNav";
import axios from "axios";
import PlaceBookingsImg from "../PlaceImgBookingsImg";
import { Link } from "react-router";



export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get('/bookings').then(response => {
      setBookings(response.data);
    })
  }, []);
  return (
    <div className=" px-4 md:px-10 lg:px-20  items-center mx-auto   mt-8 md:mt-0 mb-24">
      <AccountNav />
      <div className=" ">
        <div className="flex md:mb-4 md:mt-3">
        <Link to={'/'} className=" md:hidden px-2 rounded-lg py-1 mb-1 bg-white border border-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <h1 className="md:hidden   bg-white  border-black text-black   text-xl ml-2  py-1  uppercase text-center">My bookings</h1>
        </div>
      
        
        {bookings?.length > 0 && bookings.map((booking, index) => ( 
          <Link to={`/account/bookings/${booking._id}`} key={index} className="md:flex bg-gray-50 rounded-2xl items-center mx-auto justify-center overflow-hidden mt-2">
            <div className="w-full md:w-64 h-42 md:h-52 ">
              <PlaceBookingsImg place={booking.place} className=''/>
            </div>
            <div className="py-1 md:py-3 md:pr-3 grow md:ml-12  md:mt-0"> 
              <h2 className="text-xl">{booking.title}</h2>
            <div className="text-xl">
              <div className="md:flex gap-1 mb-2 md:mt-4  md:text-gray-500 ">
              
                <div className=" text-sm text-center md:text-xl">Number of nights: {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))}</div>
                <div className="hidden md:block ">
                  <div className="flex gap-1 items-center ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                </svg>
                from {booking.checkIn}
                </div>
                </div>
                <div className="hidden md:block">
                &rarr;
                </div>
                 <div className="hidden md:block">
                 <div className="flex gap-1 items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                </svg>
                {booking.checkOut}
                </div>
                 </div>
                
              </div>
              <div className="flex  justify-center md:block">
              
              <span className="text-sm md:text-lg md:text-gray-500">
                Total price: ${booking.price}
              </span>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}