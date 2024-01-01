import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const RegisterPage = () => {

  const [name ,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password , setPassword]=useState('')

  async function registerUser(ev){
    ev.preventDefault();
    try {
      await axios.post('/register',{
        name,
        email,
        password,
       });
         alert('Registration Successful. Now You can Login')
      
    } catch (error) {
      alert('Registration Failed.Try Again to Login ! ')
    }
    
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register Now</h1>
        <form onSubmit={registerUser} className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Shantanu Paul"
            value={name}
            onChange={ev=>setName(ev.target.value)}
          />
          <input
            type="email"
            placeholder="Your@email.com"
            value={email}
            onChange={ev=>setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={ev=>setPassword(ev.target.value)}
          />
          <button className="primary">Register Now</button>
          <div className="text-center py-2 text-gray-500">Already have an account ? {" "}
            <Link className="underline text-black" to={"/login"}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
