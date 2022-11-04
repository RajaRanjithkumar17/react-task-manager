import React, { useContext, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import "./Task.css"
import { stateContext } from "../context/Contexts";

const Tasks = () => {
  const [searchParams]= useSearchParams();
  let id=searchParams.get('id');
  console.log(id);
  
  const { state, dispatch } = useContext(stateContext);
  const [tasktitle, setTitle] = useState(state.tasks[id-1]?.tasktitle||"");
  const [taskdescription, setdescription] = useState(state.tasks[id-1]?.taskdescription||" ");
  const [tasks, add_task] = useState([]);
 

  const editVal = [...state.tasks]
  console.log(editVal,"edit task");
 

  // var tsk1 =  editVal.map((item,index)=>{
  //   return item.id=id
    
  // }
  // )
  // if(tsk1){
  //  editVal.map((item)=>{
   
  //       setTitle(item.tasktitle),
  //       setdescription(item.taskdescription)
  
   
  //  })

  // }

 

  const HandelSub = (submit) => {
    submit.preventDefault();


    const temp = {
      id:state.tasks.length+1,
      tasktitle,
      taskdescription,
      intval: false,
    };

    console.log("title", tasktitle);
    console.log("description", taskdescription, temp);

    setTitle("");
    setdescription("");
    dispatch({ type: "addtask_", payload: [...state.tasks, temp] });
    add_task([...tasks, temp]);

  
  };
  const handletask = (tsk) => {
    if (tsk.target.name === "newTask_") {
      setTitle(tsk.target.value);
    } else {
      setdescription(tsk.target.value);
    }
  };

  return (
    <div className="tasks">
      <div className="tasks_">
        <h3>Add new task</h3>
       

        <form onSubmit={HandelSub}>

          <input
            onChange={handletask}
            type={"text"}
            id="addnew"
            name="newTask_"
            value={tasktitle}
            placeholder="titile"
          />
          <textarea
            onChange={handletask}
            rows={"5"}
            name="message"
            value={taskdescription}
          />{" "}
          <br />
          <input type={"submit"} id="addbtn" />
        </form>
      </div>
    </div>
  );
};

export default Tasks;
