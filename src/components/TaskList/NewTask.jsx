import React from 'react'

const NewTask = ({data}) => {
    const accepted=(e)=>{
        e.preventDefault();
        console.log("mark as accepted")
    }
    return (
        <div
            id="tasklist"
            className="relative flex-shrink-0 h-full w-[329px] bg-emerald-700 rounded-xl p-5"
        >
            <div className="flex items-center justify-between">
                <h1 className="bg-[rgb(32,7,70)] text-[18px] px-3 py-1 rounded-lg">
                {data.category}
                </h1>
                <h3 className="text-[18px] font-medium">{data.taskDate}</h3>
            </div>
            <h2 className="mt-4 text-2xl font-semibold">{data.title}</h2>
            <p className="mt-2">{data.description}</p>
            {/* Fixing the button container */}
            <div className="absolute bottom-3 left-5 right-5 flex justify-between">
                <button onClick={accepted} className="bg-[#032c1a] px-3 py-2 text-sm rounded">Mark as Accepted</button>

            </div>
        </div>
    )
}

export default NewTask
