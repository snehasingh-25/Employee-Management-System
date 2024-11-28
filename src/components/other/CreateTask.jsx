import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext); // Get userData from AuthContext
  const [title, setTasktitle] = useState('');
  const [description, setTaskDescription] = useState('');
  const [category, setTaskCategory] = useState('');
  const [taskDate, setTaskDueDate] = useState('');
  const [assignTo, setAssignTo] = useState('');

  const SubmitHandler = (e) => {
    e.preventDefault();

    // Create the new task object
    const newTask = {
      title,
      description,
      category,
      taskDate,
      active: false, 
      newTask: true,
      completed: false,
      failed: false,
    };

    // Update userData in context
    const updatedUserData = userData.map(user => {
      if (user.name === assignTo) { // Match the assigned user
        return {
          ...user,
          tasks: [...user.tasks, newTask], // Add the new task to the user's tasks
          taskCounts: {
            ...user.taskCounts,
            newTask: user.taskCounts.newTask + 1,
          },
        };
      }
      return user; 
    });

    
    setUserData(updatedUserData);

    // Reset form fields
    setTasktitle('');
    setTaskDescription('');
    setTaskCategory('');
    setTaskDueDate('');
    setAssignTo('');
  };
  return (
    <div>
      <div className='p-5 bg-[#0e0d0d] mt-7 rounded'>
        <form onSubmit={(e) => {
          SubmitHandler(e)
        }} className='flex flex-wrap items-start justify-between '>
          <div className='w-1/2'>
            <div>
              <h3 className='text-sm mb-1'>Task Title</h3>
              <input value={title} onChange={(e)=>{
                setTasktitle(e.target.value)
              }}
               className=' w-4/5 rounded p-1 bg-transparent border-2 border-gray-400 mb-4' type="text" name="Task title" placeholder="Enter task title" />
            </div>

            <div>
              <h3 className='text-sm mb-1'>Date</h3>
              <input value={taskDate} onChange={(e)=>{
                setTaskDueDate(e.target.value)
              }}
              className='w-4/5 rounded p-1 bg-transparent border-2 border-gray-400 mb-4' type="date" name="" id="" />
            </div>
            <div>
              <h3 className='text-sm mb-1'>Assign To</h3>
              <input value={assignTo} onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
              className='w-4/5 rounded p-1 bg-transparent border-2 border-gray-400 mb-4' type="text" placeholder='Enter Employee name' />
            </div>
            <div>
              <h3 className='text-sm mb-1'>Category</h3>
              <input value={category} onChange={(e)=>{
                setTaskCategory(e.target.value)
              }}
              className='w-4/5 rounded p-1 bg-transparent border-2 border-gray-400 mb-4' type="text" placeholder='design,dev' />
            </div>
          </div>
          <div className='w-2/5 flex flex-col'>
            <h3 className='text-sm mb-1'>Description</h3>
            <textarea value={description} onChange={(e)=>{
                setTaskDescription(e.target.value)
              }} className='w-full rounded p-1 bg-transparent border-2 border-gray-400 mb-4' name="Description" cols="60" rows="7" placeholder="Enter task description" />
            <button className='text-white outline-none bg-teal-600 text-lg px-5 py-4 rounded mt-4 placeholder:text-white'>Create Task</button>
          </div>


        </form>
      </div>
    </div>
  )
}

export default CreateTask
