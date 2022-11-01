import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Form1.css"
import data from '../Credentials/Userdetail.json'


const Form1 = () => {
  const navigate = useNavigate();

  const [userName , setUserName]= useState("ramm")
  const [userPwd ,setUserPwd]= useState(1234)



  const HandelSub = ()=>{
    //sub.preventDefault();

    var detail =  data.map((index)=>{ return(index.userName)  })
     
     
    var ind = detail.indexOf(userName);
    console.log(ind);

    var pwddetail =  data.map((index)=>{ return(index.password)})
    var inde = pwddetail.indexOf(userPwd);
    console.log(inde);
   
    console.log("sub",detail,pwddetail);
 
    if (ind===inde){                                          

      console.log("validated");

      navigate('home');
      
    }
    else
    {
      alert("invalid user name or password")
    }
    
   
  }

  

const handelName = (nam)=>{
  console.log("nam",nam);
  if (nam.target.value==="userName") {
   setUserName(nam.target.value) 
  }

} 
const handelPwd = (pwd)=>{
  console.log("nam",pwd);
  if (pwd.target.value==="userpwd") {
    setUserPwd(pwd.target.value) 
  }
 
}


return (
    <div className='loginForm'>
      <div className='forms'>
      <form onSubmit={HandelSub}>
       
        <input onChange={handelName} name="userName" placeholder='User Name' value={userName}/>
        <input  onChange={handelPwd} type={"password"} name="userpwd" placeholder='Password' value={userPwd}/>
        <input type={"submit"} id="submit"/>
      </form>

      </div>
  
      
       
     </div>
  )

}
export default Form1