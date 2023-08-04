import React, { useState } from "react"
import "./Header.css";
const Header = () => {
    const navLinks = ["Home","About","Project"];
    const renderNavLink = (content) => {
        const scrollToId = `${content.toLowerCase()}Section`;
         const handleClickNav = () => {
        document.getElementById(scrollToId).scrollIntoView({ behavior:"smooth"})
    }
        return(
            <ul key={content}>
                <li>
                    <button onClick={handleClickNav}>{content}</button>
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
                            <a href="#homeSection" className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#aboutSection" className="nav__link">
                            <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projectSection" className="nav__link">
                            <i className="uil uil-briefcase nav__icon"></i>Project
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" onClick={() =>showMenu(!Toogle)}></i>
                    </div>
                    <div className="nav__toogle" onClick={() =>showMenu(!Toogle)}>
                        <i class="uil uil-apps"></i>
                    </div>
                
            </nav>
        </header>
    )
}
export default Header