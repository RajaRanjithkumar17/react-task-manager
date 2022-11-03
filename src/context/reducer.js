export const taskarr={
    tasks:[]
}

export const stateReducer =(state,action) =>{
    console.log("action",state,action);
    if(action.type ==="addtask_"){
       

        return{
            tasks:action.payload
        }

    }
    else{
        return state;
    }
}