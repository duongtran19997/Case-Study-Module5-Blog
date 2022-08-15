import './sidebar.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Sidebar() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const categories = await axios.get('http://localhost:5000/api/categories')
            setCategories(categories.data)
        }
        fetchData()
    }, [])
    return (
        <div className="sidebar">
            <div className='sidebarItem'>
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="/img/girl2.jpg" alt="About me"/>
                <p>If your central character has a quirky name or a title
                    (like Doctor or Detective) you can definitely incorporate this into your book title.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {categories.map(category => (
                        <Link to={`/?cat=${category.name}`} className="link" key={category._id}>
                        <li className="sidebarListItem" key={category._id}>{category.name}</li>
                        </Link>
                            ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-telegram"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar