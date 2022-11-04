import React,{useContext,} from 'react'
import {useNavigate,createSearchParams } from 'react-router-dom'
import { stateContext  } from '../context/Contexts'
import "./Home.css"

const Home = () => {

 const {state,dispatch} =useContext(stateContext)
 const navigate = useNavigate();
 
 console.log(state);
  const addTask = ()=>{

    navigate("/tasks")
 
  }
  const editTask = (id)=>{
    // dispatch({type:'edittsk', payload: ids})
    navigate({
      pathname:"/tasks",
      search:createSearchParams({
        id : id
      }).toString()
    })
  }

  const delTask = (id)=>{
    console.log("id");
    dispatch({type:'del_task', payload: id})
    
   alert("deleted")
  }

  const intvalue=(id)=>{
    dispatch({type:'chkbox', payload: id})
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
            <div key={index} >
            <h3 >{item.tasktitle}</h3>
            <p  id={item.id} >{item.taskdescription}</p>
            <input type='checkbox' checked={item.intval} onChange={()=>intvalue(item.id)}/>
            <button onClick={() => editTask(item.id)}>Edit</button>
            <button onClick={() => delTask(item.id)}>Del</button>
            </div>
            )
          
        })}
        </div>

    </div>
  )
}

// contactus@viyaltech.com
export default Home