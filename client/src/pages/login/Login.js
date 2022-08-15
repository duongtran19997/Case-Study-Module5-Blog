import './login.css'
import {Link} from "react-router-dom";
import {useContext, useEffect, useRef} from "react";
import axios from "axios";
import {Context} from "../../context/Context";

function Login() {
    const userRef = useRef()
    const passwordRef = useRef()
const {user,dispatch,isFetching} = useContext(Context)
    const handleSubmit =async(e) =>{
        e.preventDefault();
        dispatch({type:'LOGIN_START'})
    try{
        const res = await axios.post('http://localhost:5000/api/auth/login',{
            username:userRef.current.value,
            password:passwordRef.current.value
        })
        dispatch({type:'LOGIN_SUCCESS',payload:res.data})
    }catch(e){
            dispatch({type:'LOGIN_FAILURE'})
    }
    }


    return (
        <div className="login">
            <span className="loginTitle">
                 Login
            </span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className='loginInput' type="text" placeholder="Enter your Email..." ref={userRef}/>

                <label>Password</label>
                <input className='loginInput' type="Password" placeholder="Enter your password..." ref={passwordRef}/>
                <button className="loginButton" disabled={isFetching} >Login</button>
            </form>
            <Link to='/register' className="link loginRegisterButton" >Register</Link>
        </div>
    );
}

export default Login;