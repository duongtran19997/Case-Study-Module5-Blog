import './home.css'
import Header from "../../components/header/Header";
import Sidebar from "../../components/sizebar/Sidebar";
import Posts from "../../components/posts/Posts";

function Home() {

    return (
        <>
            <Header/>
            <div className="home">
                <Posts/>
                <Sidebar/>

            </div>
        </>
    )
}

export default Home