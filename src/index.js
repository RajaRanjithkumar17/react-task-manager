import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Form1 from './login/Form1';
import Home from './home/Home';


function Routerscomp (){
  return (
    <div>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Form1 />}></Route>
     <Route path='home' element={<Home />}></Route>
    
    </Routes>
    
     </BrowserRouter>
    </div>
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
