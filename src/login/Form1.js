import React, { useState ,useContext} from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Form1.css";
import { stateContext  } from '../context/Contexts'

import data from "../Credentials/Userdetail.json";

const Form1 = () => {
  const navigate = useNavigate();
  const {state,dispatch} =useContext(stateContext)

  const [userName, setUserName] = useState([]);
  const [userPwds, setUserPwd] = useState([]);

  const HandelSub = (sub) => {
    sub.preventDefault();

    var detail = data.map((index) => {
      return index.usersName;
    });

    var ind = detail.indexOf(userName);
    console.log(ind);

    var pwddetail = data.map((index) => {
      return index.password;
    });
    var inde = pwddetail.indexOf(userPwds);
    console.log(inde);

    console.log("sub", detail, pwddetail, userName, userPwds);

    if (ind === inde) {
      console.log("validated");
      const tem ={
        islogin: false
      }
      dispatch({ type: "islogon", payload:[...state.tasks, tem] });

      navigate("home");
    } else {
      alert("invalid user name or password");
    }

 

  };

  const handelName = (nam) => {
    if (nam.target.name === "userName") {
      setUserName(nam.target.value);
    }
  };
  const handelPwd = (pwd) => {
    if (pwd.target.name === "userpwd") {
      setUserPwd(pwd.target.value);
    }
  };

  return (
    <div className="loginForm">
      <div className="forms">
        <form >
          <TextField
            label="User Name"
            variant="outlined"
            onChange={handelName}
            id="addnew"
            name="userName"
            value={userName}
          />
          <TextField
            style={{ marginTop: 10 + "px" }}
            label="password"
            variant="outlined"
            onChange={handelPwd}
            name="userpwd"
            id="adddnew"
            value={userPwds}
            type={"password"}
          />
          <Button
            style={{ marginTop: 10 + "px", marginLeft: 100 + "px" }}
            variant="contained"
            id="addbtn"
            onClick={HandelSub}
          >
            Log in
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Form1;
