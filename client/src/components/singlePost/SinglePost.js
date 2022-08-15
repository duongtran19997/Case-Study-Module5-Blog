import './singlePost.css'
import {Link, useLocation} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Context} from "../../context/Context";

function SinglePost() {
    const location = useLocation()
    let userId = location.pathname.split('/')[2]
    const [post, setPost] = useState({});
    const {user } = useContext(Context)
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [updateMode,setUpdateMode] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`http://localhost:5000/api/posts/${userId}`);
            setPost(data.data)
            setTitle(data.data.title)
            setDesc(data.data.desc)
        };
        fetchData()
    }, [userId])
    const url = "http://localhost:5000/images/"
    const handleDelete =async ()=>{
        try{
            console.log(user.username);
            await axios.delete(`http://localhost:5000/api/posts/${userId}`, {
            data:{
                username:user.username
            }
        })
            window.location.replace('/')
        }catch (e) {

        }
    }
    const handleUpdate = () =>{
        setUpdateMode(!updateMode)
    }
    const handleConfirmUpdate = async() =>{
        try{
            console.log(user.username);
            await axios.put(`http://localhost:5000/api/posts/${userId}`, {
                    username:user.username,
                    title,
                    desc
            })
            setUpdateMode(false)
        }catch (e) {

        }
    }
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && <img src={url + post.photo} alt="" className="singlePostImg"/>}
                {updateMode? <input type='text' value={title} className="singlePostTitleInput" autoFocus onChange={(e)=>{setTitle(e.target.value)}}/>:
                    (
                <h1 className="singlePostTitle">{title}
                    {post.username === user?.username && (<div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={handleUpdate}></i>
                        <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
                    </div>)}
                </h1>      )
                }
                <div className="singlePostInfo">
                    <Link to={`/?user=${post.username}`} className="link">
                        Author:
                        <span className="singlePostAuthor">
                        <b> {post.username}</b></span>
                    </Link>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (<textarea  className="singlePostDescInput" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>):
                <p className="singlePostDesc">
                    {desc}
                </p>
                }
                {updateMode&&<button className="singlePostButton" onClick={handleConfirmUpdate}>Update</button>}
            </div>
        </div>
    );
}

export default SinglePost;