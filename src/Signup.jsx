import React, { useState } from 'react'
import { auth } from './firebase';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { getDatabase, ref} from "firebase/database";
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const db = getDatabase();
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const navigate = useNavigate();

       
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password, name);
      const user = userCredential.user;
      
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL

      })
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      
      navigate("/home");
      
      
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
   
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
      Get started today
    </h1>

   

    <form
      onSubmit={handleSubmit}
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      <p className="text-center text-lg font-medium">Create a new account</p>
      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            id="name"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            type="text"
          placeholder="Your Username"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          />

          
          
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

          
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            type="password"
          placeholder="Your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

         
        </div>
      </div>
     
      <button
        type="submit"
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Sign Up
      </button>

      <p className="text-center text-sm text-gray-500">
        Already have an account?
        <Link to="/login"> Login</Link>
      </p>
    </form>
  </div>
</div>
  )
}

export default Signup