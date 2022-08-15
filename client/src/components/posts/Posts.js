import './posts.css'
import Post from "../post/Post";
function Posts({posts}){
    return(
        <div className="posts">
            {posts.map((post,index )=>(
                <Post post={post}  key={index}/>
            ))}

        </div>
    )
}
export default Posts