import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sizebar/Sidebar";
import Posts from "../../components/posts/Posts";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  console.log(search);

  useEffect(() => {
    const fetchData = async () => {
      // due to using proxy in packet.json
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      setPosts(res.data);
    };
    fetchData();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={search ? posts : posts.slice(1)} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
