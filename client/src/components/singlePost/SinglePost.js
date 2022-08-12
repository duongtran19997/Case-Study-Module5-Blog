import './singlePost.css'
function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="./img/girl4.jpg" alt="" className="singlePostImg"/>
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>

                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:<b> Nobia-kun</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip ,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip
                    ,Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip
                </p>
            </div>
        </div>
    );
}

export default SinglePost;