import './post.css'

function Post(props) {
    return (
        <div className="post">
            <img className="postImg" src="./img/girl3.jpg" alt="img"/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle"> Show this post on the blog</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adip
                Lorem ipsum dolor sit amet, consectetur adip
                Lorem ipsum dolor sit amet, consectetur adip
                Lorem ipsum dolor sit amet, consectetur adip
                Lorem ipsum dolor sit amet, consectetur adip
                Lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
    );
}

export default Post;