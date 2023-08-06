import React, { useContext, useState } from "react"
import "./Header.css";
import { NavContext } from "../../context/navContent";
const Header = () => {
    const {activeLinkId} = useContext(NavContext);
   
    const navLinks = ["Home","About","Project"];
    const renderNavLink = (content) => {
        console.log(content);
        const scrollToId = `${content.toLowerCase()}Section`;
         const handleClickNav = () => {
        document.getElementById(scrollToId).scrollIntoView({ behavior:"smooth"})
    }
        return(
            
            <ul key={content}>
                <li>
                    <button onClick={handleClickNav}
                    className={`${activeLinkId == "Home" ? "nav__link.activeClass" : "asas"}`}>{content}</button>
                </li>
            </ul>
        )
    }
   
    const[Toogle,showMenu] = useState(false);
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Hendry Tjahaja Surijanto Putra</a>
                <div className={Toogle ? "nav__menu show-menu" :"nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#homeSection"  
                    className={`${activeLinkId === "Home" ? "nav__link activeClass" : "nav__link"}`}>
                            <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#aboutSection" className={`${activeLinkId === "About" ? "nav__link activeClass" : "nav__link"}`}>
                            <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projectSection" className={`${activeLinkId === "Project" ? "nav__link activeClass" : "nav__link"}`}>
                            <i className="uil uil-briefcase nav__icon"></i>Project
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() =>showMenu(!Toogle)}></i>
                    </div>
                    <div className="nav__toogle" onClick={() =>showMenu(!Toogle)}>
                        <i className="uil uil-apps"></i>
                    </div>
                
            </nav>
        </header>
    )
}
export default Header