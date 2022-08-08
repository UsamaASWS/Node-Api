import React,{useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter,Switch,Route}from 'react-router-dom'
import Home from './Components/Pages/Home'
import Login from './Components/auth/Login'
import Register from './Components/auth/Register'
import Appbar from './Layout/AppBar/AppBar'
import UserContext from './context/UserContext'
import Axios from 'axios';
function App() {

  const [userData,setUserData]=useState({
    token:undefined,
    user:undefined
  });

  useEffect(()=>{
    const checkLoggIn = async ()=>{
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token","");
        token ="";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/user/login", null ,
        {headers:{"x-auth-token":token}}
      );
      if(tokenRes.data){
        const userRes =await Axios.get("http://localhost:5000/user",{
          headers:{"x-auth-toke":token},
        })
        setUserData({
          token,
          user:userRes.data
        });
      }
    }
    checkLoggIn();
  },[]);

  return (
    <div className="App">
    
      <BrowserRouter>
      <UserContext.Provider value={{userData,setUserData}}>
       <Appbar/>
       <div className="container">
       <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/Home' component={Home}/>
            <Route path='/register' component={Register}/>
        </Switch>
        </div>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
