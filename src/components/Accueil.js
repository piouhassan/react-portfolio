import React from "react";
import bg2 from"../assets/long.png"
import {Link} from "react-router-dom";
import moment from "moment/moment";

const Accueil = ({sociales,home}) => {
    
        return (
                <>
                    <section className="home bg-light vh-100" id="home"
                             style={{backgroundImage : `url('${bg2}')`}} >
                        <div className="container-fluid">
                            <div className="row ">
                                <div className="col-lg-12 ">
                                    <div className="social-home">
                                        <ul className="list-inline">
                                            <li>
                                                <Link to={{pathname : `mailto:${sociales?.gmail}`}} target="_blank" >
                                                    <i className="fab fa-google"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={{pathname : sociales?.github}} target="_blank" >
                                                    <i className="fab fa-github"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={{pathname : sociales?.linkedin}} target="_blank" >
                                                    <i className="fab fa-linkedin-in"></i>
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>

                                    <div className="d-flex align-items-center vh-100">
                                        <div className="full-width">
                                            <div className="banner">
                                                <h6>Hi There,</h6>
                                                <h1 className="cd-headline clip">I Am a  Full Stack developer</h1>
                                                <p className="max-width-450  mt-20 mb-30">
                                                    <b>+{moment('20150605','YYYYMMDD').fromNow(true)}</b>  as a {home?.work}. I work with the new work tools.
                                                </p>
                                                <a href="#about" className="btn-custom">
                                                    <span><i className="fas fa-user"></i></span>
                                                    <span> More About Me</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-info">
                                        <div className="item">
                                            <p className="font-w-700 mb-0">Email</p>
                                            <p className="mb-0">{sociales?.gmail}</p>
                                        </div>

                                        <div className="item">
                                            <p className="font-w-700 mb-0">Phone</p>
                                            <p className="mb-0">{home?.phone}</p>
                                        </div>

                                        <div className="item">
                                            <p className="font-w-700  mb-0">Location</p>
                                            <p className="mb-0">{home?.city}, {home?.country}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
        )
}

export default Accueil