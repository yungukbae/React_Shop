import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom'
import {SidebarData} from './DataDummy'
import './Navbar.css'
import { IconContext } from "react-icons";
import UserIcon from './UserIcon'
import { useHistory } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip';


const Navbar = () => {
    const history = useHistory();
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
  

    return(
    <>
        <IconContext.Provider value={{color:'#000'}}>
        <div className="navbar">

        <Tooltip title="Menu Bar" placement="right"><Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar}/>
            </Link></Tooltip>

            <Tooltip title="Home" placement="bottom"><div className="nav-logo">
                    <div onClick={() => {history.push('/') }}>RT_Collector</div>
            </div></Tooltip>
            <div className="user-icon">
                <UserIcon/>
            </div>

            

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

            <ul className='nav-menu-items' onClick={showSidebar}>

                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return(
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                        <span>{item.title}</span>
                        </Link>

                    </li>
                    )
                })}

            </ul>

        </nav>
        </IconContext.Provider>
    </>
    );
}

export default Navbar