import './settings.css'
import Sidebar from "../../components/sizebar/Sidebar";
import {useContext, useState} from "react";
import {Context} from "../../context/Context";
import axios from "axios";
function Settings() {
    const {user,dispatch} = useContext(Context)
    const [file,setFile] = useState(null)
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [ success,setSuccess] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:'UPDATE_START'})
        const updateUser = {
            userId: user._id,
            username,
            email,password
        }
        console.log(updateUser);
        if (file) {
            const data = new FormData()
            const fileName = Date.now() + file.name
            data.append('name', fileName)
            data.append('file', file)
            updateUser.profilePicture = fileName
            try {
                await axios.post('http://localhost:5000/api/upload', data)
            } catch (e) {

            }
        }
        try {
           const res = await axios.put('http://localhost:5000/api/users/'+ user._id,updateUser)
                setSuccess(true)
            dispatch({type:'UPDATE_SUCCESS',
                        payload:res.data
            })

        } catch (e) {
dispatch({type:'UPDATE_FAILURE'})
        }
    }


    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsUpdateTitle">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>
                        Profile Picture
                    </label>
                    <div className="settingsPP">
                        <img src={file ? URL.createObjectURL(file):user.profilePicture} alt="beautiful girl"/>
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                        </label>
                    </div>

                        <input type="file" id='fileInput' style={{display: 'none'}}
                        onChange={(e)=>{
                            setFile(e.target.files[0])
                        }}
                        />
                        <label>Username</label>
                        <input type="text" placeholder={user.username} onChange={(e)=>{setUsername(e.target.value)}}/>
                        <label>Email</label>
                        <input type="email" placeholder={user.email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        <label>Password</label>
                        <input type="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                        <button className="settingsSubmit" type='submit'>Update</button>
                    {success && <span style={{color:'green',textAlign:'center',marginTop:'20px'}}>Profile had been updated...</span>}
                </form>
            </div>
            <Sidebar/>
        </div>
    );
}

export default Settings;