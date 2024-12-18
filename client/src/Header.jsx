import { useContext, useState } from "react"
import { Link } from "react-router"
import { UserContext } from "./UserContext"
import SearchBar from "./pages/SearchBar";
import Dropdown from "./Dropdown";



export default function Header() {
    const {user} = useContext(UserContext);
    let [open, setOpen] = useState(false);
    
  
  return (
    <div className="shadow-md w-full sticky left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <Link to={'/'}
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
          </span>
          PlanTrip
        </Link>
        
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <svg className={open ? "close size-6" : "menu size-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <ul
          className={`md:flex mt-6 md:mt-0 text-center md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-10 " : "top-[-490px]"
          }`}>
            
            <Dropdown />
        </ul>
      </div>
    </div>   
  )
}