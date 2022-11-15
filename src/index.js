import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Form1 from './login/Form1';
import Home from './home/Home';
import Tasks from './tasks/Tasks';
import { stateContext } from './context/Contexts';
import { stateReducer } from './context/reducer';
import { taskarr } from './context/reducer';


function Routerscomp (){
  const [state, dispatch] = useReducer(stateReducer,taskarr);
  console.log("sta",state);
  return (
    <stateContext.Provider value={{state, dispatch}}>
       <BrowserRouter>
       {
        state?.islogin?<Routes>
        {/* <Route path='/' element={<Form1 />}></Route> */}
        <Route path='/' element={<Home />}></Route>
        <Route path='tasks' element={<Tasks />}></Route>
        <Route path='*' element={<Navigate to ="/" />}></Route>
        
      </Routes>:<Routes>
        <Route path='/form1' element={<Form1 />}></Route>
        <Route path='*' element={<Navigate to ="/form1" />}></Route>

       
        
      </Routes>
       }
        
    
     </BrowserRouter>
    </stateContext.Provider>
   
  
  )
  
  
  
 
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Routerscomp  />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
