import './home.css'
import Header from "../../components/header/Header";
import Sidebar from "../../components/sizebar/Sidebar";
import Posts from "../../components/posts/Posts";
import {useEffect, useState} from "react";
import axios from "axios";

function Home() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-07-12&sortBy=publishedAt&apiKey=1acef2dd8efb4e57ae67f5cdd9d98454')
            setPosts(res.data.articles)
        }
        fetchData()
    },[])
    return (
        <>
            <Header/>
            <div className="home">
                <Posts posts={posts}/>
                <Sidebar/>

            </div>
        </>
    )
}

export default Home