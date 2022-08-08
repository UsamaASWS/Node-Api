import React,{useContext} from 'react'
import {useHistory} from "react-router-dom"
import './AuthOptions.css';
import UserContext from '../../context/UserContext'
export default function AuthOptions() {
    const {userData, setUserData} = useContext(UserContext);
    
    
    const history= useHistory();



    const register = () => history.push('/register');
    const login = () => history.push('/');
    const BlogPost = () => history.push('/BlogPost');
    const VideoPost = () => history.push('/VideoPost');
    const BlogUpdate = () => history.push('/BlogUpdate');
    const VideoDelete=()=> history.push('/VideoDelete');
    const BlogDelete=()=>history.push('/BlogDelete');
    const AllBlogs=()=> history.push('/AllBlogs');
    const AllVideos=()=> history.push('/AllVideos');
    const logout=()=>{
        setUserData({
            token:undefined,
            user:undefined
        })
        localStorage.setItem("auth-token","");    
    }
   


    return (
        <nav className='authOptions'>
            {userData.token ? (
                  <>
                  <button onClick={BlogPost}>Blog-Post</button>
                  <button onClick={VideoPost}>Video-Post</button>
                  <button onClick={AllBlogs}>Video-Post</button>
                  <button onClick={AllVideos}>Video-Post</button>
                  <button onClick={logout}>Log out</button>
                   </>
                   
                   ):(
                <>
                <button onClick={register}>Register</button>
                <button onClick={login}>Login</button>
                </>
            )}
            
        </nav>
    );
}
