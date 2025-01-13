import { useState, useContext, useEffect } from "react"
import {differenceInCalendarDays} from "date-fns"
import axios from "axios";
import { Link, Navigate } from "react-router";
import {UserContext} from './UserContext';
import toast, { Toaster } from 'react-hot-toast';

export default function BookingWidget({place}) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [name,setName] = useState('');
  const [phone, setPhone] = useState('');
  const [redirect, setRedirect] = useState('');
  const {user} = useContext(UserContext);

  useEffect(() => {
    if(user) {
      setName(user.name);
    }
  }, [user])

  let numberOfNights = 0;
  if(checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  }

  if(redirect) {
    return <Navigate to={redirect} />
  }

  async function bookThisPlace() {
   
    if (!checkIn || !checkOut || !numberOfGuests || place.maxGuests < numberOfGuests || numberOfGuests <= 0 ||  !name || !phone) {
      toast.error('Please fill out all required fields');
      return;
    } 
    const response = await axios.post('/bookings', {
      checkIn, checkOut, numberOfGuests, name, phone,
      place: place._id,
      price: numberOfGuests * numberOfNights * place.price
    });
    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
    
  }
  

  return(
    <div className="bg-white shadow p-4 rounded-2xl text-center sticky md:top-8">
      
              <div className="text-md md:text-xl font-semibold text-center">
                Price: ${place.price} / per night
              </div>
              
                <div className="border rounded-2xl mt-4" >
                <div className="flex">
                <div className=" mx-auto">
                <label className="text-sm md:text-lg font-semibold">Check in:</label>
                <input type="date" className="text-sm md:text-lg"
                value={checkIn}
                onChange={ev => setCheckIn(ev.target.value)}
                />
              </div>
              </div>
              <div className="py-3  border-l">
                <label className="text-sm md:text-lg font-semibold">Check out:</label>
                <input type="date" className="text-sm md:text-lg" 
                value={checkOut}
                onChange={ev => setCheckOut(ev.target.value)}
                />
              </div>
              
              
              <div className="py-3 px-4 border-t">
                <label className="text-sm md:text-lg font-semibold">Number of guests:</label>
                <input type="number" className="text-sm md:text-lg"
                value={numberOfGuests}
                max={place.maxGuests}
                min={1}
                onChange={ev => setNumberOfGuests(ev.target.value)}
                
                />
              </div>
             
              {numberOfNights > 0 && (
                <div className="py-3 px-4  border-t">
                <label className="text-sm md:text-lg font-semibold">Your full name:</label>
                <input type="text" 
                value={name}
                onChange={ev => setName(ev.target.value)}
                />
                <label className="text-sm md:text-lg font-semibold">Phone number:</label>
                <input type="tel" 
                value={phone}
                onChange={ev => setPhone(ev.target.value)}
                />
              </div>
              )}
              {!!user && (
              <button onClick={bookThisPlace} className="primary mt-4 border-t">
                Book this place
                {numberOfNights > 0 && (
                  <span> ${numberOfGuests * numberOfNights * place.price}</span>
                )}
                <Toaster/>
                </button>
                )}
                {!user && (
                <>
                <button className="primary  border-t cursor-not-allowed" disabled >
                Book this place
                {numberOfNights > 0 && (
                  <span> ${numberOfGuests * numberOfNights * place.price}</span>
                )}
                </button>
                <div className="mt-2 underline flex justify-center text-lg hover:text-blue-400">
                <Link to={'/login'}>
                Login first</Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 px-1 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
                <Toaster/>
                </div>
                </>
              )}
              </div>
              
              
            </div>
  )
}