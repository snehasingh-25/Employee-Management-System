import React, { useEffect, useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({data,changeUser}) => {
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    changeUser('')
    
  }
  const [username, setUsername] = useState('')
  useEffect(() => {
    if (!data) {
      setUsername('Admin');
    } else {
      setUsername(data.name);
    }
  }, [data]);
  
  return (
    
    <div className='flex items-end justify-between'>
      <h1 className='text-4xl font-extrabold'>Hello {username}</h1>
      <button onClick={logOutUser} className='text-white outline-none bg-teal-900 text-lg px-5 py-4 rounded-sm mt-4' >LOG OUT</button>
    </div>
  ) 
}

export default Header
