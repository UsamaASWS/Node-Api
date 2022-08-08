import React,{useState,useContext} from 'react'
import {useHistory} from 'react-router-dom';
import UserContext from '../../context/UserContext'
import Axios from 'axios';
import './Auth-pages.css';


export default function Login() {
    const [email, setEmail] = useState()
    const [password, setpassword] = useState()
    const {setUserData} = useContext(UserContext);
    const history = useHistory(); 

    const submit = async (e) => {
        e.preventDefault();
        const loginUser ={email,password}
       
        const loginRes =await Axios.post("http://localhost:5000/user/login",loginUser);
        setUserData({
            token:loginRes.data.token,
            user:loginRes.data.user,
        });
       localStorage.setItem("auth-token",loginRes.data.token);
       history.push('/Home');
    };

    return (
        <div className="Auth-Pages">
            
            <h2>Login</h2>
            <form className="form"  onSubmit={submit}>
                <label htmlFor='register-email'>Email</label>
                <input id='register-email' type="email" onChange={e=>setEmail(e.target.value)}/>

                <label htmlFor='register-password'>Password</label>
                <input id='register-password' type="password" onChange={e=>setpassword(e.target.value)}/>

            <input type="submit" value="Register"/>
            </form>

        </div>
    )
}
