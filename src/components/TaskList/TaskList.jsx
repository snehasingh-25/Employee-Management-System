import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    return (
        <div className='flex overflow-x-auto items-center justify-start gap-4 h-[65%] py-5  mt-7 flex-nowrap'>
            {data.tasks.map((elem,idx)=>{
                const key = elem.id || `task-${idx}`;
                if(elem.newTask){
                    return <NewTask key={key} data={elem}/>
                }
                if(elem.active){
                    return <AcceptTask key={key} data={elem} />
                }
                if(elem.completed){
                    return <CompletedTask key={key} data={elem} />
                }
                if(elem.failed){
                    return <FailedTask key={key} data={elem} />
                }
                return null;

            })}
            
        
        </div>
    )
}

export default TaskList
