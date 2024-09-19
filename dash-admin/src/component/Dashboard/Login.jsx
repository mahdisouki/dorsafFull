import React, { useState } from 'react';
import '../CSS/Login.css';
import axios from 'axios';
import Cookies from 'js-cookie'
const Login = () => {
    const [login, setLogin] = useState({ email: "", password: "" });
    const submit = async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/user/login' ,login )
            Cookies.set("token", res.data.accesstoken);
            window.location.href= "/"
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
       <div className="login-container">
           <div className="login-screen">
               <div className="login-screen__content">
                   <form onSubmit={submit} className="login-form">
                       <div className="login-field">
                           <i className="login-icon fas fa-user" />
                           <input onChange={e=>setLogin({...login , email:e.target.value })} type="text" className="login-input" placeholder="User name / Email" />
                       </div>
                       <div className="login-field">
                           <i className="login-icon fas fa-lock" />
                           <input onChange={e=>setLogin({...login , password:e.target.value })} type="password" className="login-input" placeholder="Password" />
                       </div>
                       <button type='submit' className="login-submit">
                           <span className="login-button__text">Log In Now</span>
                           <i className="login-button__icon fas fa-chevron-right" />
                       </button>				
                   </form>
               </div>
               <div className="login-screen__background">
                   <span className="login-screen__background__shape login-screen__background__shape4" />
                   <span className="login-screen__background__shape login-screen__background__shape3" />		
                   <span className="login-screen__background__shape login-screen__background__shape2" />
                   <span className="login-screen__background__shape login-screen__background__shape1" />
               </div>		
           </div>
       </div>
    );
}

export default Login;
