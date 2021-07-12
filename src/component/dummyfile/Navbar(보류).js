import { Link } from "react-router-dom"
import {useState} from 'react'
import './Navbar.css'



const Navbar = () => {

  const [menubtn, setMenubtn] = useState(false);
  let togglestate
  const handleClick = (e) => {
    e.preventDefault();
    if(menubtn === false){
      return(
      setMenubtn(true),
      togglestate = "sideBar-show",
      console.log('clicked',menubtn))
    }else{
     return( setMenubtn(false),
      togglestate = "sideBar-hide",
      console.log('clicked',menubtn))
    }
    
  }


    return(
        <div>

        <div className="menuBar">          
        <div className="bar">
        <div className="logo"><a href="#">LOGO</a></div>
        <div className="menu-btn"><button onClick={(e) => handleClick(e)}>Menu</button></div>

        <div className="menu-logo"><a href="#">MainLOGO</a></div>

          <div className="bar-list">
          <ul>
          <a href='#'><li>menu 1</li></a>
          <a href='#'><li>menu 1</li></a>
          <a href='#'><li>menu 1</li></a>
          <a href='#'><li>menu 1</li></a>
              </ul>
          </div>
        </div>

        <div className={togglestate}>
          <ul>
                <a href='#'><li>menu 1</li></a>
                <a href='#'><li>menu 1</li></a>
                <a href='#'><li>menu 1</li></a>
                <a href='#'><li>menu 1</li></a>
              </ul>
          </div>
        
        
        </div>
        
        
      </div>
    )

}

export default Navbar