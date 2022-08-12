import './header.css';

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span  className='headerTitleSm'>React & Note</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
           <div className='headerImg'> <img  src="./img/girl.jpg" alt=""/></div>
        </div>
    );
}

export default Header;