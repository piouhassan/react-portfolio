import React from "react";
import {Link} from "react-router-dom";


const Header = (props) => {

    console.log(props)
    return (
        <>
            <div className="menu-toggle" id="menuToggle">
                <span></span>
            </div>
            <div className="header-left" id="scrollspy">
                <div className="logo bg-base-color">
                    <Link to="/" className="mb-0">H.</Link>
                </div>

                <div className="main-menu" id="js-menu">
                    <div className="cross bg-base-color">
                        <span><i className="fas fa-times text-white"></i></span>
                    </div>
                    <nav className="menu">
                        <ul className="menu-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#about">About </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#services">Services</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#works">Works</a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>


            </div>
        </>
    )
}

export default Header