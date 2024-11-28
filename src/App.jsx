import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDasboard from './components/Dashboard/EmployeeDasboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])
  
  const handleLogin=(email,password)=>{
    if(email=="admin@example.com" && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee=userData.find((e)=>email==e.email && password==e.password )
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
      
    }else{
      alert('Invalid Email or Password')
    }
    
  }
  
  return (
    <>
    {!user? <Login handleLogin={handleLogin}/>:''}
    {user=='admin'? <AdminDashboard changeUser={setUser}/> : (user=='employee'?<EmployeeDasboard changeUser={setUser} data={loggedInUserData} />:null ) }
    </>
    
  )
}

export default App

