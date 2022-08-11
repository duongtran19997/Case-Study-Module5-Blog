import './single.css'
import Sidebar from "../../components/sizebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

function Single() {
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar/>
            </div>
    );
}

export default Single;