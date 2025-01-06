import { useState } from "react";
import { Link, Navigate } from "react-router";
import axios from 'axios';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function registerUser(ev) {
      ev.preventDefault();
      try{
        await axios.post('/register', {
          name,
          email,
          password
        });
        alert('Registration successful. Now you can log in')
        setRedirect(true);
      } catch {
        alert('Registration failed. Try again')
      }
  }
  if (redirect) {
    return <Navigate to={'/login'} />;
  }
  
  return (
    
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create an account
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={registerUser} className="space-y-6">
          <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text" placeholder="John Doe" 
                  value={name} onChange={ev => 
                  setName(ev.target.value)}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
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
                Create an account
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
              Already registered?{' '}
            <Link  className="font-semibold text-indigo-600 hover:text-indigo-500 underline" to={'/login'}>
            Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}