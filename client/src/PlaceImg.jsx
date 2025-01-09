import axios from "axios";

export default function PlaceImg({place, index=0, className=null}) {
  if(!place?.photos?.length) {
    return '';
  }
  
  return (
    <>
    {place.photos.length > 0 && (
      <img className=" size-64  md:size-52 h-44 md:w-72 shrink-0 rounded-xl  items-center justify-center mx-auto" src={axios.defaults.baseURL + '/uploads/'+place.photos[index]} alt="" />
    )}
    </>
  )
}