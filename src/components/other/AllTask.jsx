import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)
    return (
        <div>
            <div className='bg-[#0e0d0d] p-5 rounded mt-5'>
                <div className='flex justify-between bg-[#062014] p-4 rounded' >
                    <h1 className='text-lg font-bold w-1/5'>Name</h1>
                    <h1 className='text-lg font-bold w-1/5'>NewTask</h1>
                    <h1 className='text-lg font-bold w-1/5'>Active</h1>
                    <h1 className='text-lg font-bold w-1/5'>Completed</h1>
                    <h1 className='text-lg font-bold w-1/5'>Failed</h1>
                </div>
            </div>
            <div className='bg-[#0e0d0d] pl-5 pr-5 rounded h-[13rem] overflow-auto'>
                {userData.map(function (elem, idx) {
                    return <div key={idx} className='flex mb-2 justify-between border-2 border-emerald-600 p-4 rounded' >
                        <h1 className='text-lg  w-1/5'>{elem.name}</h1>
                        <h1 className='text-lg text-teal-200 w-1/5'>{elem.taskCounts.newTask}</h1>
                        <h1 className='text-cyan-300 text-lg w-1/5'>{elem.taskCounts.active}</h1>
                        <h1 className='text-green-600 text-lg w-1/5'>{elem.taskCounts.completed}</h1>
                        <h1 className='text-lg text-[#cf280b] w-1/5'>{elem.taskCounts.failed}</h1>
                    </div>
                })}

            </div>
        </div>
    )
}

export default AllTask
