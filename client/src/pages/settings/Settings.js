import './settings.css'
import Sidebar from "../../components/sizebar/Sidebar";

function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsUpdateTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>
                        Profile Picture
                    </label>
                    <div className="settingsPP">
                        <img src="./img/girl4.jpg" alt="beautiful girl"/>
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                        </label>
                    </div>

                        <input type="file" id='fileInput' style={{display: 'none'}}/>
                        <label>Username</label>
                        <input type="text" placeholder="Username"/>
                        <label>Email</label>
                        <input type="email" placeholder="Email"/>
                        <label>Password</label>
                        <input type="Password"/>
                        <button className="settingsSubmit">Update</button>

                </form>
            </div>
            <Sidebar/>
        </div>
    );
}

export default Settings;