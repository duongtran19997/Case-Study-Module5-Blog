import './register.css'
import {Link} from "react-router-dom";
import { useState} from "react";
import axios from "axios";
function Register() {
    const [username,setUsername] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [error,setError] = useState(false)
    const handleChange = (e) =>{
        if(e.target.name ==='username'){
            setUsername(e.target.value)
        }if(e.target.name ==='password'){
            setPassword(e.target.value)
        }if(e.target.name ==='email'){
            setEmail(e.target.value)
        }
    };
    const handleSubmit =async (e) =>{
        setError(false)
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                username,
                password,
                email
            })
            res.data && window.location.replace('/login')
        }catch (e) {
            setError(true)
        }
    }
    return (
        <div className="register">
            <span className="registerTitle">
                Register
            </span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className='registerInput' name='username' value={username} type='text' placeholder="Enter your Email..." onChange={handleChange}/>
                <label>Email</label>
                <input className='registerInput' type="text" name='email' value={email} placeholder="Enter your Email..." onChange={handleChange}/>

                <label>Password</label>
                <input className='registerInput' type="Password" name='password' value={password} placeholder="Enter your password..." onChange={handleChange}/>
                <button className="registerButton" >Register</button>
                {error && <p style={{color: 'red' ,marginTop:'10px'}}>Some thing went wrong</p>}
            </form>
            <Link to='/login' className="link registerLoginButton" >Login</Link>
                   </div>
    );
}

export default Register;