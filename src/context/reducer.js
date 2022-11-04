export const taskarr = {
  tasks: [],
};


export const stateReducer = (state, action) => {
  console.log("action", state, action);
  if (action.type === "addtask_") {
    return {
      tasks: action.payload,
    };
  }
 else if (action.type === "chkbox") {
    return {
        tasks:state.tasks.map((item)=>{
            if(item.id === action.payload){
                return { ...item, intval:!item.intval}
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
};
