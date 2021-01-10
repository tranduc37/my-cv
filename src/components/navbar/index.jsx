import React, { useState } from 'react';
import './index.css';
import { MenuItems } from '../../components/menuItems';
import { HashLink as Link} from 'react-router-hash-link';
import logo from '../../assets/logo-cv.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export default () => {
  const [click, setClick] = useState(false);
  const ToggleIcons = () => {
    setClick(!click);
  }
  const CloseMobileMenu = () => {
    setClick(false);
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar_container">
          <div className="navbar_logo">
            <Link to="/"> 
              <img src={logo} alt="image_logo" className="navbar_logo--img"/> 
            </Link>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {
              MenuItems.map((item, index) => {
                return (
                  <li key={index} className="nav-item" onClick={CloseMobileMenu}>
                    <Link className={item.cName} id={item.id} smooth to={item.url}>{item.title}</Link>
                  </li>
                )
              })
            }
          </ul>
          <div className="menu-icon" onClick={ToggleIcons}>
            {click ? <FaTimes/> : <FaBars />}
          </div>
        </div>  
      </nav>
    </>
  )
}
