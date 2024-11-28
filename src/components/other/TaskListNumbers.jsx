import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className=' screen mt-10 flex justify-between gap-4 '>
      <div className='h-30 w-[45%] rounded-xl py-6 px-6 bg-emerald-700'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-2xl font-semibold'>New Task</h3>
      </div>
      <div className='h-30 w-[45%] rounded-xl py-6 px-6 bg-teal-700'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-2xl font-semibold'>Accepted Task</h3>
      </div>
      <div className='h-30 w-[45%] rounded-xl py-6 px-6 bg-cyan-700'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-2xl font-semibold'>Completed Task</h3>
      </div>
      <div className='h-30 w-[45%] rounded-xl py-6 px-6 bg-[#032c1a]'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-2xl font-semibold'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
