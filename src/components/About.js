import React from "react";
import moment from 'moment'
import moi from '../assets/moi.jpg'
import {Link} from "react-router-dom";

const About = (props) => {
    const experiences = props.experiences
    const educations = props.educations
    var sociales = props.sociales
    var subAbout  = props.subAbout

    return (

        <>
            <section id="about" className="section about">
                <div className="container-fluid">
                    <div className="row mb-50 pt-30">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="mb-0">About me</h2>
                                <p className="text-muted mb-0">Main informations about me and what I love to do.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-50">
                        <div className="col-lg-5">
                            <div className="hero">
                                <img src={moi} alt="" />
                            </div>
                        </div>

                        <div className="col-lg-7 d-flex align-items-center">
                            <div className="details">
                                <h5>Hello ,I'm {props.about.firstname} {props.about.lastname}</h5>
                                <p className="mb-25">
                                    {props.about.description}
                                </p>

                                <ul className="info mb-5 list-inline">
                                    <li><span>Name :</span> {props.about.firstname} {props.about.lastname}</li>
                                    <li><span>Phone :</span> {props.about.phone}</li>
                                    <li><span>Date of birth :</span> {moment(props.about.birthday,).format('Do MMMM YYYY')}</li>
                                    <li><span>Email :</span><Link to={{pathname : `mailto:${sociales.gmail}`}} >{sociales.gmail}</Link>
                                    </li>
                                    <li><span>Nationality :</span> {props.about.nationality}</li>
                                    <li><span>Address :</span> {props.about.city} {props.about.country}</li>
                                    <li><span>Work Status :</span> {props.about.work}</li>
                                    <li><span>Freelancer :</span> {props.about.freelance === 1 ? "Available" : "not Available" }</li>
                                </ul>

                                    <Link to={{pathname : props.about.cv}} target="_blank" className="btn-custom">
                                    <span><i className="fas fa-cloud-download-alt"></i></span>
                                    <span>Download My CV</span>
                                    </Link>
                            </div>
                        </div>
                    </div>


                    <div className="row features mb-20">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="item">
                                <div className="icon mb-10"><i className="fas fa-user"></i></div>
                                <p className="mb-0">{subAbout.projects + 11} Projects end</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="item">
                                <div className="icon mb-10">
                                    <i className="fas fa-smile"></i>
                                </div>
                                <p className="mb-0">{subAbout.customers + 11} Satisfied Clients</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="item">
                                <div className="icon mb-10">
                                    <i className="fas fa-certificate"></i>
                                </div>
                                <p className="mb-0">+{moment('20150605','YYYYMMDD').fromNow(true)}  Exp</p>
                            </div>
                        </div>

                    </div>

                    <div className="row ">
                        <div className="col-lg-6">

                            <h5 className="mb-30">My Experience</h5>
                            <div className="timeline">
                                {
                                    experiences.map((item,k) =>
                                        <div key={k} className="item">
                                            <div className="content">
                                                <h6 className="mb-0">{item.role}
                                                    <span className="text-muted"> - </span> {item.institut} </h6>
                                                <small className="text-muted">{item.intervalle_date}</small>
                                                <p className="pt-15 mb-0">{item.description}</p>
                                            </div>
                                        </div>

                                    )
                                }


                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h5 className="mb-30">My Education</h5>
                            <div className="timeline">
                                {
                                    educations.map((item,k) =>
                                        <div key={k} className="item">
                                            <div className="content">
                                                <h6 className="mb-0">{item.diplome}
                                                    <span className="text-muted"> - </span> {item.ecole} </h6>
                                                <small className="text-muted">{item.intervalle_date}</small>
                                                <p className="pt-15 mb-0">{item.description}</p>
                                            </div>
                                        </div>

                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About