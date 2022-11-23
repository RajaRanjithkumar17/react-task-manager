import  React, { useEffect } from "react";
import { useContext,useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate, createSearchParams } from "react-router-dom";
import { stateContext } from "../context/Contexts";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from '@mui/material/TextField';
import "./Home.css";

const Home = () => {

  const { state, dispatch } = useContext(stateContext);
  const [all_tasks,allTsk]= useState(state.tasks)
  const [searc_Task, searchTask] = useState("");
  const [tasks, searctask] = useState(state.tasks);
  
  const navigate = useNavigate();

  console.log(state.tasks,all_tasks);

  useEffect(()=>{
    fillterByascen();
  },[searc_Task])

  useEffect(()=>{
    console.log(state.tasks);
  searctask(state.tasks);
  },[state.tasks])

  const fillterByascen= ()=>{

    console.log("serach",searc_Task,state);

    if(searc_Task?.length){

      console.log( state?.tasks.filter((elm)=>{elm.tasktitle.includes(searc_Task)}),typeof searc_Task);

    const reslt=  state?.tasks.filter((elm)=>{elm.tasktitle.includes(searc_Task)});
     
      searctask(reslt)

      console.log(reslt);


    }
    else{
      searctask(state?.tasks)
    }
  }
  
  const addTask = () => {
    navigate("/tasks");
  };

  // edit

  const editTask = (id) => {
    navigate({
      pathname: "/tasks",
      search: createSearchParams({
        id: id,
      }).toString(),
    });
  };

// del

  const delTask = (id) => {
    console.log("id");
    dispatch({ type: "del_task", payload: id });

    alert("deleted");
  };

  const intvalue = (id) => {
    dispatch({ type: "chkbox", payload: id });
  };

// mark as complete

  const dovalue = (id) => {
    dispatch({ type: "didbox", payload: id });
  };

// ascend by date
  const filTask = () => {
    const ascend = state.tasks.sort(function (a, b) {
      const date1 = new Date(a.taskdate);
      const date2 = new Date(b.taskdate);

      return date1 - date2;
    });
    
    // console.log(ascend);

    dispatch({ type: "filter", payload: ascend });

  };

//all tasks

  const allTask=()=>{
    
    const allTask_=all_tasks.map(function(index){

      return index;

    })
    
    dispatch({ type: "alltask", payload: allTask_ });

  }

  // filter by prior
  const filterbyPrior = () => {
    
    const ascendByprior = state.tasks.filter(function (index) {
      const prior1 = index.intval;

      if (prior1 === true) {
        return index;
      } 
    
    });


    dispatch({ type: "filterbyPrior", payload: ascendByprior });
   
  };

  //completed

  const completedTask=()=>{
    const completed_Task=state.tasks.filter(function(index){
      const completed=index.complete;

      if(completed===true){
        return index;
      }
    });
    dispatch({type:"filterBycomplete",payload:completed_Task})
  }
  


  return (
    <div>
      <div className="taskList">
        <h2  style={{marginTop:20 +"px" }}>Task list</h2> 
     
        <Button
          style={{ marginLeft: 40 + "px", height:40 +"px",marginTop:20 +"px" }}
          onClick={() => addTask()}
          variant="contained"
        >
          Add Task
        </Button>
        <Button
          style={{ marginLeft: 40 + "px", height:40 +"px",marginTop:20 +"px" }}
          onClick={() => completedTask()}
          variant="contained"
        >
          completed
        </Button>
        <Button
          style={{ marginLeft: 40 + "px" , height:40 +"px",marginTop:20 +"px"}}
          onClick={() => filTask()}
          variant="contained"
        >
          Sort By Date
        </Button>
        <Button
          style={{ marginLeft: 40 + "px", height:40 +"px",marginTop:20 +"px" }}
          onClick={() => filterbyPrior()}
          variant="contained"
        >
          Prior
        </Button>
        <Button
          style={{ marginLeft: 40 + "px" , height:40 +"px",marginTop:20 +"px"}}
          onClick={() => allTask()}
          variant="contained"
        >
          All
        </Button>
        <TextField
            style={{ marginTop: 10 + "px" ,marginLeft: 110 + "px" }}
            label="Search.."
            variant="outlined"
            onChange={(e)=>searchTask(e.target.value)}
            name="searchtask_"
            id="search_new"
            value={searc_Task}
            type={"search"}
          />
      </div>

      <div className="tasks">
        {state.tasks?.map((item, index) => {
          return (
            <Card key={index} sx={{ minWidth: 275, padding: 5, margin: 2 }}>
              <h3>{item.tasktitle}</h3>
              <h3>{item.taskdescription}</h3>
              <p>{item.taskdate}</p>
              <FormControlLabel
                label="mark as complete"
                control={
                  <Checkbox
                    checked={item.complete}
                    onChange={() => dovalue(item.id)}
                  />
                }
              />
              <br />
              <FormControlLabel
                label="prior"
                control={
                  <Checkbox
                    checked={item.intval}
                    onChange={() => intvalue(item.id)}
                  />
                }
              />
              <Button
                size="small"
                onClick={() => editTask(item.id)}
                variant="contained"
              >
                Edit
              </Button>
              <Button
                size="small"
                onClick={() => delTask(item.id)}
                variant="contained"
              >
                Del
              </Button>
            </Card>
          );
        })}
      </div>
        {state?.tasks?.length===0&&<h5>Add New Task...</h5>}
       { tasks?.length===0&&<h5>No Task Found...</h5>}
    </div>
  );
};

// contactus@viyaltech.com
export default Home;


