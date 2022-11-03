
import React,{ useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { stateContext } from '../context/Contexts'
import "./Home.css"

const Home = () => {

 
  const {state,dispatch} =useContext(stateContext)
  const navigate = useNavigate();

  const addTask = ()=>{
    
    // console.log(tasktitle,taskdescription);
    navigate("/tasks")
 
  }
 

  return (
    <div className='task'>
        <div className='taskList'>
        <h1>Task list</h1>

        <button onClick={() => addTask()}>Add New Task</button>
        </div>
        <div className='taskList'>
        {state.tasks?.map((item,index)=>{
          return(
            <div>
            <h3 key={index}>{item.tasktitle}</h3>
            <p key={index}>{item.taskdescription}</p>
            </div>
            )
          
        })}
        </div>

    </div>
  )
}

// contactus@viyaltech.com
export default Home