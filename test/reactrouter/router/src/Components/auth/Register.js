import React,{useState,useContext} from 'react'
import {useHistory} from 'react-router-dom';
import UserContext from '../../context/UserContext'
import Axios from 'axios'
export default function Register() {
    const [email, setEmail] = useState()
    const [password, setpassword] = useState()

    const {setUserData} = useContext(UserContext);
    const history = useHistory(); 
    const submit = async (e) => {
        e.preventDefault();
        const newUser ={email,password}
        await Axios.post
        ('http://localhost:5000/user/signup',newUser);
        const loginRes =await Axios.post("http://localhost:5000/user/login",
        {
            email, password
        });
        setUserData({
            token:loginRes.data.token,
            user:loginRes.data.user,
        });
       localStorage.setItem("auth-token",loginRes.data.token);
       history.push('/');
    };
    return (
        <div>
            <h2>Register</h2>
            <form className="form" onSubmit={submit}>
                <label htmlFor='register-email'>Email</label>
                <input id='register-email' type="email" onChange={e=>setEmail(e.target.value)}/>

                <label htmlFor='register-password'>Password</label>
                <input id='register-password' type="password" onChange={e=>setpassword(e.target.value)}/>

                <input type="submit" value="Register"/>
            </form>
        </div>
    )
}
