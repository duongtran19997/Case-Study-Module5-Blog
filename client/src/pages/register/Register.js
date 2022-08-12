import './register.css'
function Register() {
    return (
        <div className="register">
            <span className="registerTitle">
                Login
            </span>
            <form className="registerForm">
                <label>Email</label>
                <input className='registerInput' type="text" placeholder="Enter your Email..."/>

                <label>Password</label>
                <input className='registerInput' type="Password" placeholder="Enter your password..."/>
                <button className="registerButton" >Login</button>
            </form>
            <button className="registerLoginButton" >Register</button>
                   </div>
    );
}

export default Register;