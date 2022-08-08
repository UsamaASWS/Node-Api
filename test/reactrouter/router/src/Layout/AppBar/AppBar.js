import React from 'react'
import {Link} from 'react-router-dom'
import AuthOptions from '../../Components/auth/AuthOptions'
import './AppBar.css'
export default function AppBar() {
    return (
        <div className="header"> 
            <Link to='/'><h1 className="title">The Logo</h1></Link>
            <AuthOptions className="authOptions"/>
        </div>
    )
}
