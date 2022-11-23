export const taskarr = {
  tasks: [],
};


export const stateReducer = (state, action) => {
  console.log("action", state, action);

  //add task
  if (action.type === "addtask_") {
    return {
      ...state,
      tasks: action.payload,
    };
  }

//log in
  else if (action.type === "islogon") {
  console.log("action", state, action);
  return { ...state, islogin:!state.islogin}
   
  }

//ascend by date
else  if (action.type === "filter") {
  console.log("action", state, action);

  return {  
     ...state,
                tasks:action.payload}
   
  }

//all task
else  if (action.type === "alltask") {
  console.log("action", state, action);

  return {  
     ...state,
                tasks:action.payload}
   
  }

//filter by prior
else  if (action.type === "filterbyPrior") {
  console.log("action", state, action);

  return {  
     ...state,
                tasks:action.payload}
   
  }
//complete
 else  if (action.type === "filterBycomplete") {
  console.log("action", state, action);

  return {  
     ...state,
                tasks:action.payload}
   
  }

//check box 
 else if (action.type === "chkbox") {
    return {
      ...state,
        tasks:state.tasks.map((item)=>{
            if(item.id === action.payload){
                return { ...item, intval:!item.intval}
            }
            return item;
        })
    };
  }

//mark as complete
 else if (action.type === "didbox") {
    return {
      ...state,
        tasks:state.tasks.map((item)=>{
            if(item.id === action.payload){
                return { ...item, complete:!item.complete}
            }
            return item;
        })
    };
  }


//delete task
 else if (action.type === "del_task") {
    return {
        ...state,
                tasks: state.tasks.filter((item)=>item.id !== action.payload)
    };
  }

  //upd task
 else if (action.type === "add_to_task") {
  console.log(state,action.payload);
    return {
        ...state,
                tasks: [...state.tasks.filter((item)=>item.id !== action.payload),action.payload]
    };
  }


  else{

    return state
  }


};

