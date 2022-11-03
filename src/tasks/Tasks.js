import React,{ useContext, useState }  from 'react'
import { Link ,useNavigate,useSearchParams} from 'react-router-dom'
import "./Task.css"
import { stateContext } from '../context/Contexts'

const Tasks = () => {
    const [tasktitle , setTitle]= useState(" ")
    const [taskdescription ,setdescription]= useState(" ")
    const[tasks,add_task]= useState([])
    const {state,dispatch} =useContext(stateContext)
     console.log(state.tasks,"tasks");
   
  
    const HandelSub = (submit)=>{
        submit.preventDefault();

        const temp ={
          tasktitle,
          taskdescription
        }

        console.log("title",tasktitle);
        console.log("description",taskdescription,temp);

        dispatch({type:"addtask_",payload:[...state.tasks,temp]})
        add_task([...tasks,temp])
   
    }
    const handletask = (tsk)=>{
   
      if (tsk.target.name==="newTask_") {
        setTitle(tsk.target.value) 
      }
      else{
        setdescription(tsk.target.value) 
  
      }
      
    }
 
   
  return (
    <div className='tasks'>
        <div className='tasks_'>
            <h3>Add new task</h3>
          <form  onSubmit={HandelSub}>

              <input onChange={handletask}  type={"text"} id="addnew" name="newTask_"   value={tasktitle} placeholder="titile"/>

              <textarea onChange={handletask} rows={"5"}  name="message"  value={taskdescription}/> <br/>

              <input type={"submit"} id="addbtn" />
             
             
   
 
          </form>
        </div>

        {/* {tasks?.map((item,index)=>
       <div>
         <p key={index}> {item.tasktitle} </p>
        <p key={index}> {item.taskdescription} </p>
       </div>
        )} */}
      </div>
    
  )
}

export default Tasks