import './post.css'
import {Link} from 'react-router-dom'

function Post({post}) {
    const url = "http://localhost:5000/images/"
    return (
        <div className="post">
            <img className="postImg" src={url+post.photo} alt="img"/>
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c,index) => (c ? <span className="postCat" key={index} >{c}</span> :
                        <span className="postCat">Life</span>))}

                </div>
                <Link to={`post/${post._id}`} className='link'> <span
                    className="postTitle">{post.title} </span></Link>
                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.description}</p>
        </div>
    );
}

export default Post;