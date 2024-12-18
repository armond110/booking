import React, { useState } from 'react';
import { useContext} from "react"
import { UserContext } from "./UserContext"
import { Link,Navigate,useParams } from 'react-router';
import axios from "axios";
import PlacesPage from './pages/PlacesPage';


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  let [open, setOpen] = useState(false);
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
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
      <div className="relative inline-block text-left">
            
      {!!user && (
        <div>
        <button
            onClick={toggleDropdown}
            className="inline-flex justify-center w-full rounded-md 
            border border-gray-300 shadow-sm px-4 py-2 bg-white 
            text-sm font-medium text-gray-700 hover:bg-gray-50 
            focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-gray-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
            <p className='text-lg'>{user.name}</p>
            <svg
                className="ml-2 -mr-1 h-7 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </button>
        {isOpen && (
          <div
              className="origin-top-right absolute right-0 mt-2 w-56 
              rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
              focus:outline-none"
              role="menu"
          >
              <div className="py-1" role="none">
                  <Link
                      to={'account'}
                      className="block px-4 py-2 text-sm text-gray-700 
                      hover:bg-gray-100"
                      role="menuitem"
                  >
                     Account
                  </Link>
                  <Link
                      to={'/account/places/new'}
                      className="block px-4 py-2 text-sm text-gray-700
                      hover:bg-gray-100"
                      role="menuitem"
                  >
                      Propose an experience
                  </Link>
                  <button
                      onClick={logout}
                      className="block border-t px-4 py-2 text-sm text-gray-700
                      bg-white w-full hover:bg-gray-100"
                      role="menuitem"
                  >
                      Logout
                  </button>
                  
              </div>
          </div>
      )}
    </div>
      )}
      {!user && (
        <div>
        <button
            onClick={toggleDropdown}
            className="inline-flex justify-center w-full rounded-md 
            border border-gray-300 shadow-sm px-4 py-2 bg-white 
            text-sm font-medium text-gray-700 hover:bg-gray-50 
            focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-gray-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
            <p className='text-lg'>Account</p>
            <svg
                className="ml-2 -mr-1 h-7 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </button>
        {isOpen && (
          <div
              className="origin-top-right absolute right-0 mt-2 w-56 
              rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
              focus:outline-none"
              role="menu"
          >
              <div className="py-1" role="none">
                  <Link
                      to={'/login'}
                      className="block px-4 py-2 text-sm text-gray-700 
                      hover:bg-gray-100 flex"
                      role="menuitem"
                  >
                     Login
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                  </Link>
                  <Link
                      to={'/Register'}
                      className="block border-t px-4 py-2 text-sm text-gray-700
                      hover:bg-gray-100 flex"
                      role="menuitem"
                  >
                      Register
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                  </Link>   
              </div>
          </div>
      )}
    </div>
      )}   
  </div>
    );
};

export default Dropdown;