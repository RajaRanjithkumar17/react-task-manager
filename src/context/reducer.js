export const taskarr = {
  tasks: [],
};


export const stateReducer = (state, action) => {
  console.log("action", state, action);
  if (action.type === "addtask_") {
    return {
      ...state,
      tasks: action.payload,
    };
  }


  if (action.type === "islogon") {
  console.log("action", state, action);
  return { ...state, islogin:!state.islogin}
   
  }


  if (action.type === "filter") {
  console.log("action", state, action);

  return {  
     ...state,
                tasks:action.payload}
   
  }
  if (action.type === "filterbyPrior") {
  console.log("action", state, action);

  return {  
     ...state,
                tasks:action.payload}
   
  }


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



 else if (action.type === "del_task") {
    return {
        ...state,
                tasks: state.tasks.filter((item)=>item.id !== action.payload)
    };
  }
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

