import React from "react";

const Service = (props) => {
    const services = props.services
    return (
        <>
            <section id="services" className="section services">
                <div className="container-fluid">
                    <div className="row mb-50">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="mb-0">My Services</h2>
                                <p className="text-muted mb-0">I Have Worked With A Number Of Clients.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            services.map(
                                (item,k) =>
                        <div key={k}  className="col-sm-6 col-lg-4">
                            <div className="item">
                                <div className="circle">
                                    <h2>{k + 1}</h2>
                                </div>
                                <div className="content ">
                                    <h5 className="mt-15 mb-10">{item.title}</h5>
                                    <p className="mb-0">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )

}

export  default Service