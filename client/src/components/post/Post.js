import './post.css'

function Post({post}) {
    console.log(post);
    return (
        <div className="post">

            {post.urlToImage && <img className="postImg" src={post.urlToImage} alt="img"/>}
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle"> {post.title}</span>
                <hr/>
                <span className="postDate">{new Date(post.publishedAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.description}</p>
        </div>
    );
}

export default Post;