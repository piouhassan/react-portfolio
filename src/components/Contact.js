import React, {useState} from "react";
import {toast } from 'react-toastify';
import Ajaxloader from '../assets/loader.svg'
import emailjs from "emailjs-com"
import {Field, Form, Formik} from "formik";
import * as Yup from "yup"

 const Contact   = ({sociales}) => {

    const [loading,setLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("The fullname is required"),
        email: Yup.string()
            .required('The E-mail address is required'),

        subject: Yup.string()
            .required("The subject is required"),
        message: Yup.string()
            .required('The message can not be empty'),

    });

    const handleSubmit = (values) => {
        setLoading(true)
        try {
            emailjs.sendForm(
                "service_dozahjn",
                "template_mrkd4u3",
                values,
                "user_eEKKxkwrpn3PATv8Jgj1q"
            ).then(res => {
                console.log(res)
                setLoading(false)
                toast.info("Message send successfully, We will get in touch soon");
            }).catch(err => {
                setLoading(false)
                console.log(err)
            })
        }
        catch (e) {
            setLoading(false)
            console.log(e)
        }
    }

        return (
           <section className="section contact pb-70" id="contact">
                    <div className="container-fluid">
                        <div className="row mb-50">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <h2 className="mb-0">Contact Me</h2>
                                    <p className="text-muted mb-0">Feel Free To Contact Me Any Time </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-20">
                            <div className="col-lg-6">
                                <Formik

                                    initialValues={{
                                        name : "", email : "", subject : "", message : ""
                                    }}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ errors, touched }) =>
                                        <Form className="form contact_form ">
                                            
                                            <div className="form-group">
                                                <Field  style={{color : "#fff"}} className={`form-control ${errors.name && touched.name ? 'is-invalid' : null}`} id="input-name"  name="name" placeholder="Fullname"/>
                                                {errors.name && touched.name ? (
                                                    <small className='text-danger text-left'>{errors.name}</small>
                                                ) : null}
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <Field style={{color : "#fff"}} type="email" className={`form-control ${errors.email && touched.email ? 'is-invalid' : null}`} id="email"  name="email" placeholder="E-mail"/>
                                                        {errors.email && touched.email ? (
                                                            <small className='text-danger text-left'>{errors.email}</small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <Field style={{color : "#fff"}} className={`form-control ${errors.subject && touched.subject ? 'is-invalid' : null}`} id="subject"  name="subject" placeholder="Subject"/>
                                                        {errors.subject && touched.subject ? (
                                                            <small className='text-danger text-left'>{errors.subject}</small>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>

                                            <div style={{color : "#fff"}} className="form-group">
                                                <Field as="textarea" className={`form-control ${errors.message && touched.message ? 'is-invalid' : null}`} id="message"  name="message" placeholder="Message here..."/>
                                                {errors.message && touched.message ? (
                                                    <small className='text-danger text-left'>{errors.message}</small>
                                                ) : null}
                                            </div>


                                            <button type="submit" name="submit" className="btn-custom btn-sm"  disabled={loading}>
                                                {
                                                    loading ?
                                                    <img src={Ajaxloader} alt="" style={{width : "20px"}} />
                                                    :
                                                        <span>
                                                        <span><i className="fas fa-paper-plane"/></span>
                                                        <span> Send Message</span>
                                                        </span>
                                                }
                                            </button>
                                            
                                        </Form>
                                    }
                                </Formik>


                            </div>
                            <div className="col-lg-6">
                                <h5>Let's talk about everything!</h5>
                                <p className=" mb-30">
                                    It would be great to hear from you! If you got any questions,
                                    please do not hesitate to send me a message.
                                    I'm looking forward to hearing from you!
                                </p>
                                <div className="contact-info">
                                    <div className="item mb-20">
                                        <p className="font-w-700 mb-0">Email: </p>
                                        <p className="mb-0"><i
                                            className="fas fa-envelope base-color"> </i> {sociales?.gmail}</p>
                                    </div>
                                    <div className="item">
                                        <p className="font-w-700 mb-0">Skype: </p>
                                        <p className="mb-0"><i className="fab fab fa-skype base-color"> </i> {sociales?.skype}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="row">*/}
                        {/*    <iframe width="100%" className="border-all" height="375" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title=""/>*/}
                        {/*</div>*/}
                    </div>
                </section>
)
}

export default Contact