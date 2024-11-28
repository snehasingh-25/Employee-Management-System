import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const SubmitHandler = (e) => {
    e.preventDefault()
    console.log("Submitted")
    handleLogin(email,password);
    setEmail('')
    setPass('')
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-teal-600 p-20 rounded-xl'>
        <form onSubmit={(e) => {
          SubmitHandler(e)
        }}
          className='flex flex-col items-center'>
          <input value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} required className='outline-none bg-transparent border-2 border-teal-600 text-xl px-5 py-4 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your Email' />
          <input value={password} onChange={(e) => {
            setPass(e.target.value)
          }} required className=' outline-none bg-transparent border-2 border-teal-600 text-xl px-5 py-4 rounded-full mt-4 placeholder:text-gray-400' type="password" placeholder='Enter your Password' />
          <button className='text-white outline-none bg-teal-600 text-xl px-5 py-4 rounded-full mt-4 placeholder:text-white'>LOG IN</button>
        </form>
      </div>

    </div>
  )
}

export default Login
