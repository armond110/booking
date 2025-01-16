import { useEffect, useState } from "react";
import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";
import AccountNav from "../AccountNav";
import axios from 'axios'
import { Link, Navigate, useParams } from "react-router";
import {addDays, format, differenceInCalendarDays} from "date-fns"

export default function PlacesFormPage() {
  const {id} = useParams();
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);
  
  useEffect(() => {
    if (!id) {
      return
    }
    axios.get('/places/'+id).then(response => {
      const {data} = response;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setPrice(data.price);
    })
  }, [id]);

  function inputHeader(text) {
    return (
      <h2 className="text-2xl mt-4">{text}</h2>
    )
  }
  function inputDescription(text) {
   return(
    <p className="text-gray-500 text-sm">{text}</p>
   )
  }
  function preInput(header, description){
    return(
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    )
  }
  async function savePlace(ev) {
    ev.preventDefault();
    const placeData = {
        title, address, photos: addedPhotos, 
        description, perks, extraInfo, 
        checkIn,checkOut,maxGuests,price
    }
    if(id) {
    await axios.put('/places', {
    id, ...placeData
    });
    setRedirect(true);
    } else {
    await axios.post('/places', placeData);
    setRedirect(true);
    }
  }

  
  if(redirect) {
    return <Navigate to={'/account/places'} />
  }

  return (
    <div className="px-2 text-center md:px-20">
      <AccountNav />
          <form onSubmit={savePlace}>
          <Link to={'/'} className="absolute md:hidden rounded-full bg-white border px-1 py-1  top-4 left-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </Link>
            {preInput('Title', 'The title for your place should be short anc catchy as in advertisement')}
            <input type='text' value={title} onChange={ev => setTitle(ev.target.value)} placeholder='title, for example: My lovely apartment'/>
            {preInput('Address', 'Address to you place')}
            <input type='text' value={address} onChange={ev => setAddress(ev.target.value)} placeholder='address'/>
            {preInput('Photos', 'More = Better')}
            <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
            {preInput('Description', 'Description of the place')}
            <textarea value={description} onChange={ev => setDescription(ev.target.value)}/>
            {preInput('Perks', 'Select all the perks of your place')}
              <div className="grid mt-4 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                <Perks  selected={perks} onChange={setPerks}/>
              </div>
              {preInput('Extra Info', 'House rules, etc')}
              <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)}/>
              
              <div className="grid gap-2 md:grid-cols-1 ">
                  
                  <div className="">
                  <h3 className="mt-2 -mb-1 text-center">Max number guests</h3>
                    <input type="number" min={1} max={16} value={maxGuests} onChange={ev => setMaxGuests(ev.target.value)} />
                    </div>
                </div>
                <div>
                  <h3 className="mt-2 -mb-1">Price per night</h3>
                    <input type="number" value={price} onChange={ev => setPrice(ev.target.value)} />
                    </div>

                <div>
                  <button className="primary my-4">Save</button>
                </div>
          </form>
        </div>
  )
}