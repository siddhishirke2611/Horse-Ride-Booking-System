import { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        }
        else {
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? "nav active" : "nav"}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            {/* <Link to="#" className='logo'>
            <img src='./logo512.png' alt='logo' />
            </Link> */}
            <ul className='menu'>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">Home</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar