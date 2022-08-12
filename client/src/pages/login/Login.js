import './login.css'
function Login() {
    return (
        <div className="login">
            <span className="loginTitle">
                Login
            </span>
            <form className="loginForm">
                <label>Email</label>
                <input className='loginInput' type="text" placeholder="Enter your Email..."/>

                <label>Password</label>
                <input className='loginInput' type="Password" placeholder="Enter your password..."/>
                <button className="loginButton" >Login</button>
            </form>
            <button className="loginRegisterButton" >Register</button>
        </div>
    );
}

export default Login;