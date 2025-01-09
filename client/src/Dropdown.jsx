import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link, useParams } from 'react-router'
import { UserContext } from './UserContext';
import { useState, useContext } from 'react';


export default function Dropdowns() {

  const {ready, user, setUser} = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  

  return (
    <>
    
    
    {!!user && (
            <Menu as="div" className="md:relative inline-block text-left">
      
            <div>
            
              <MenuButton className=" inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-100 md:bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <div className='hidden md:block '>{user.name}</div>
               
                <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
              </MenuButton>
            </div>
      
            <MenuItems
              transition
              className="absolute left-12 md:-left-16 bottom-14 md:-bottom-24  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <Link
                    to={'/account'}
                    className="border-b border-gray-200 block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    
                    Account 
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to={'/account/places/new'}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Propose an experience
                  </Link>
                </MenuItem>
            
              </div>
            </MenuItems>
          </Menu>
          )}
          {!user && (
            <Menu as="div" className="relative inline-block text-left">
      
            <div>
            
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-100 md:bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <div className='hidden md:block '>Account</div>
                <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
              </MenuButton>
            </div>
      
            <MenuItems
              transition
              className="absolute bottom-14 md:-bottom-24 -right-16 md:-left-28 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <Link
                    to={'/login'}
                    className="border-b border-gray-200 block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Sign in 
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to={'/register'}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Register
                  </Link>
                </MenuItem>
                
              </div>
            </MenuItems>
          </Menu>
          )}
    </>
    
  )
}