import React,{useState,useEffect} from 'react';
import Axios from 'axios'

export default function Vedios() {
    const [blogData,setBlogData]=useState([])
    useEffect( () => {
            Axios.get('http://localhost:5000/products').then(res =>{
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
        },[])

    return (
        <div>
            <ul>
            {blogData.map(blogs => (
                <li key={blogs.id}>{blogs.name}</li>
                ))
            }    
            </ul>
            
        </div>
    )
}
