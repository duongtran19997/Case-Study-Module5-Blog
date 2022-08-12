import './sidebar.css'
function Sidebar(){
    return(
        <div className="sidebar">
            <div className='sidebarItem'>
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="./img/girl2.jpg" alt="About me"/>
                <p>If your central character has a quirky name or a title
                    (like Doctor or Detective) you can definitely incorporate this into your book title.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
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