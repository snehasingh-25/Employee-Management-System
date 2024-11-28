import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDasboard = ({data,changeUser}) => {
  return (
    
    <div className='p-10 h-screen'>
      <Header  changeUser={changeUser} data={data}/>
      <TaskListNumbers data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDasboard
