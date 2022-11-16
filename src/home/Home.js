import * as React from "react";
import { useContext } from "react";
import Button from "@mui/material/Button";
import { useNavigate, createSearchParams } from "react-router-dom";
import { stateContext } from "../context/Contexts";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./Home.css";

const Home = () => {
  const { state, dispatch } = useContext(stateContext);
  const navigate = useNavigate();

  console.log(state);
  const addTask = () => {
    navigate("/tasks");
  };
  const editTask = (id) => {
    navigate({
      pathname: "/tasks",
      search: createSearchParams({
        id: id,
      }).toString(),
    });
  };

  const delTask = (id) => {
    console.log("id");
    dispatch({ type: "del_task", payload: id });

    alert("deleted");
  };

  const intvalue = (id) => {
    dispatch({ type: "chkbox", payload: id });
  };
  const dovalue = (id) => {
    dispatch({ type: "didbox", payload: id });
  };
  const filTask = () => {
    const ascend = state.tasks.sort(function (a, b) {
      const date1 = new Date(a.taskdate);
      const date2 = new Date(b.taskdate);

      return date1 - date2;
    });
    // console.log(ascend);

    dispatch({ type: "filter", payload: ascend });
  };

  // const filterbyPrior=()=>{

  //   const ascendByprior=state.tasks.map(function(index){

  //     const prior1=index.intval;

  //      if(prior1===true){

  //       return index;
  //       }

  // else{
  //   return
  // }

  //   });
  //   console.log(ascendByprior);

  //   dispatch({type:"filterbyPrior" , payload: ascendByprior})
  // }

  return (
    <div>
      <div className="taskList">
        <h2>Task list</h2>

        <Button
          style={{ marginLeft: 40 + "px" }}
          onClick={() => addTask()}
          variant="contained"
        >
          Add Task
        </Button>
        <Button
          style={{ marginLeft: 40 + "px" }}
          onClick={() => filTask()}
          variant="contained"
        >
          Sort
        </Button>
        {/* <Button  style={{ marginLeft: 40 + "px" }}  onClick={() => filterbyPrior()} variant="contained">Prior</Button> */}
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
              />{" "}
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
    </div>
  );
};

// contactus@viyaltech.com
export default Home;
