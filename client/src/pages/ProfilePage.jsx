import { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import {Link, Navigate, useParams} from 'react-router'
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";




export default function ProfilePage() {
  const [redirect, setRedirect] = useState(null);
  const {ready, user, setUser} = useContext(UserContext);
  let {subpage} = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  async function logout() {
    await axios.post('/logout');
    setRedirect('/');
    setUser(null);
  }

  if(!ready) {
    return 'Loading...';
  }

  if(ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  }
  if(redirect) {
    return <Navigate to={redirect}/>
  }

  return (
    <div className="mt-8 md:mb-96 md:mt-0">
      <AccountNav />
      {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto">
          <div className="md:hidden   bg-white  border-black text-black   text-xl gap-2 mb-8  py-2 uppercase"><h1 className="">My Profile</h1></div>
          <div className="mb-10">You are Logged in as {user.name} ({user.email})</div><br />
          <button onClick={logout} className="md:w-full  bg-primary text-white mt-72 md:mt-8 gap-2 mb-8  px-24 py-2  rounded-full">Logout</button>
        </div>
      )}
      {subpage === 'places' && (
        <PlacesPage />
      )}
    </div>
  )
}