import { useContext, useState } from "react";
import axios from 'axios';
import { Link, Navigate } from "react-router";
import { UserContext } from "../UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext);
  

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    
    try{
      const {data} = await axios.post('/login', {email, password});
      setUser(data);
      
      setRedirect(true);
    } catch {
      alert('Login failed');
      
    }
  }

  if(redirect) {
    return <Navigate to={'/'} />
  }
  /*
   <div className="mt-6 grow flex items-center justify-around mx-8">
      <div className="mb-64">
      <h1 className="text-4xl text-center mb-12">Login</h1>
      <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
        <input 
        type="email" placeholder="your@email.com" 
        value={email} 
        onChange={ev => setEmail(ev.target.value)}/>
        <input 
        type="password" placeholder="password" 
        value={password} 
        onChange={ev => setPassword(ev.target.value)}/>
        <button className="primary mt-6">Login </button>
        
        <div className="text-center py-2 text-gray-500">
          Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
        </div>
      </form>
      
      </div>
    </div>
  */

  return (
    <div>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLoginSubmit} className="space-y-6" >
        
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email" placeholder="your@email.com" 
                value={email} 
                onChange={ev => setEmail(ev.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              
              
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
              
            </div>
            <div className="mt-2">
              <input
                type="password" placeholder="password" 
                value={password} 
                onChange={ev => setPassword(ev.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
        Don't have an account yet?{' '}
          <Link  className="font-semibold text-indigo-600 hover:text-indigo-500 underline" to={'/register'}>
          Register here
          </Link>
        </p>
      </div>
    </div>
  </div>
  )
}