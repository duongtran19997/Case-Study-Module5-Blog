import './topbar.css'
import {Link} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../context/Context";
function TopBar() {
    const {user,dispatch} = useContext(Context);
    const handleLogout = () =>{
        dispatch({type: 'LOGOUT'})
    }
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcons fa-brands fa-instagram"></i>
                <i className="topIcons fa-brands fa-square-facebook"></i>
                <i className="topIcons fa-brands fa-twitter"></i>
                <i className="topIcons fa-brands fa-telegram"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                  <Link to='/' className="link"><li className="topListItem">Home</li></Link>
                  <Link to='/' className="link"> <li className="topListItem">Abouts</li></Link>
                  <Link to='/' className="link"> <li className="topListItem">Contacts</li></Link>
                  <Link to='/write' className="link"> <li className="topListItem">Write</li></Link>
                  <li className="topListItem" onClick={handleLogout}>{user&&"Logout"}</li>
                </ul>
            </div>
            <div className="topRight">
                <ul className="topList">
                    {user?
                        <Link to='/settings'>
                        <img className="topImg" src={user.profilePicture} alt=''/>
                        </Link>

                        :<>
                        <Link to="/login" className='link'><li className="topListItem">Login</li></Link>
                        <Link to="/register" className='link'><li className="topListItem">Register</li></Link>
                    </>
                    }
                </ul>

                <i className="topSearchIcon  fa-solid fa-magnifying-glass-plus"></i>
            </div>
        </div>
    );
}

export default TopBar;