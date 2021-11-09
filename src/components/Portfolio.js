import React from "react";


const Portfolio = (props) => {
    const work = props.work

    return (
        <>
            <section id="works" className="section works">
                <div className="container-fluid">
                    <div className="row mb-50">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="mb-0">My Latest Works</h2>
                                <p className="text-muted mb-0">A latest creative works.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row works-items">
                                {
                                    work.map(
                                        (item,k) =>
                         <div key={k} className="col-lg-4 col-md-6">
                            <div className="item">
                                <div className="image">
                                    <img src={item.image} alt=""  className="portfolio-img" />
                                        <div className="overly">
                                            <a href={item.link} className="view-work"> View Work</a>
                                        </div>
                                </div>

                                <div className="details d-flex align-items-center">
                                    <p className="mb-0">{item.titre}</p>

                                    <a  href={item.link} target="_blank"  rel="noreferrer"  className="ml-auto">
                                        <i className="fas fa-external-link-alt"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                                    )}

                    </div>
                </div>
            </section>
        </>
    )
}

export  default Portfolio