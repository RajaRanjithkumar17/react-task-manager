import React, { useContext, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { stateContext } from "../context/Contexts";
import "./Task.css"

const Tasks = () => {

  // const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  let id = searchParams.get("id");
  const { state, dispatch } = useContext(stateContext);
  const [tasktitle, setTitle] = useState(state.tasks[id-1]?.tasktitle || "");
  const [taskdescription, setdescription] = useState(state.tasks[id-1]?.taskdescription || "" );
  const [taskdate , setDat] =useState("");
    


  const handletask = (tsk) => {
    if (tsk.target.name === "newTask_") {
      setTitle(tsk.target.value);
    } else if (tsk.target.name === "message") {
      setdescription(tsk.target.value);
    }
     else if (tsk.target.name === "date"){

       setDat(tsk.target.value)

     }
  };


  const HandelSubmit = (submit) => {

    submit.preventDefault();
    // navigate("/")

  if (id) {
    const temp = {
      id: parseInt(id),
      tasktitle,
      taskdescription,
        taskdate,
        intval: false,
        complete:false,
        
    };
    setTitle("");
    setdescription("");
     setDat("")
    dispatch({ type: "add_to_task", payload:temp });
  } 
  else {
    const temp = {
      id: state.tasks.length + 1,
      tasktitle,
      taskdescription,
       taskdate,
      intval: false,
      complete:false,
      
    };

    console.log("title", tasktitle);
    console.log("description", taskdescription, temp);

    setTitle("");
    setdescription("");
    setDat("")
    dispatch({ type: "addtask_", payload: [...state.tasks, temp] });
  }


    
    
  };

  return (
    <div className="tasks">
      <div className="tasks_">
        <h3>Add new task</h3>
        <br/>

        <form >
          
            <TextField
              label="title"
              variant="outlined"
              onChange={handletask}
              id="addtnew"
              name="newTask_"
              value={tasktitle}
             
            />
 
            <TextField style={{marginTop: 10 + 'px', width:330+"px"}}
               variant="outlined"
               multiline 
               rows={5}
              label="Description"
              id="addtnew"
              onChange={handletask}
              name="message"
              value={taskdescription}
            />
       
          <br />
         
          <br />
          <input type='date' name='date' id="date" value={taskdate} onChange={handletask}/> <br/> <br/> 
          <Button variant="contained" id="addbtn" onClick={HandelSubmit} >Add</Button>

        
          
        </form>
      </div>
    </div>
  );
};

export default Tasks;

