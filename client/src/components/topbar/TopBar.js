import './topbar.css'
function TopBar(props) {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcons fa-brands fa-instagram"></i>
                <i className="topIcons fa-brands fa-square-facebook"></i>
                <i className="topIcons fa-brands fa-twitter"></i>
                <i className="topIcons fa-brands fa-telegram"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">Abouts</li>
                    <li className="topListItem">Contacts</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Logout</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src='./img/kimsohuyn.jpg' alt=''/>
                <i className="topSearchIcon  fa-solid fa-magnifying-glass-plus"></i>
            </div>
        </div>
    );
}

export default TopBar;