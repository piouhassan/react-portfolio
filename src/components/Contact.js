import React from "react";
import {SendContact} from "../_helpers/apiFetch";
import { ToastContainer, toast } from 'react-toastify';
import validations from "../_helpers/validations";
import Ajaxloader from '../assets/loader.svg'


export default class Contact  extends  React.Component {
    state = {
         form :  {
             name: '',
             email: '',
             subject: '',
             message: '',
         },
        nameError: '',
        emailError: '',
        subjectError: '',
        messageError: '',

        loading: false,
        resData : false,

    }
    change = (e) => {
        let fields = this.state.form;
        fields[e.target.name] = e.target.value;
        this.setState({fields});
    }


    onSubmit = (e) => {
        e.preventDefault();

        console.log(this.state.form)

        if (validations(this.state.form) === 'success') {
            this.setState({
                loading : true
            })
            const dataSend = {
                name: this.state.form.name,
                email: this.state.form.email,
                subject: this.state.form.subject,
                message: this.state.form.message
            }
            const sendcontact = SendContact(dataSend)
            this.setState({
                resData : sendcontact
            })



            setTimeout(() => {
                console.log(this.state.resData)

                if (this.state.resData){
                    this.setState({
                        loading : false,
                        form :  {
                            name: '',
                            email: '',
                            subject: '',
                            message: '',
                        }
                    })
                    toast.info("Message send successfully", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                else{
                    this.setState({
                        loading : false
                    })
                    toast.error("Some error Occured return", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            },4000)

        }
        else {
            toast.error(validations, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }


    }

    render() {
        const load  = this.state.loading;
        return (
                <section className="section contact pb-70" id="contact">
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <div className="container-fluid">
                        <div className="row mb-50">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <h2 className="mb-0">Contact Me</h2>
                                    <p className="text-muted mb-0">Feel Free To Contact Me Any Time </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <form action="https://mariama.netlify.app/html/assets/php/mail.php" method="post"
                                      id="main_contact_form" className="form contact_form ">

                                    <div className="form-group">
                                        <input type="text" name="name" id="name" className="form-control"
                                               value={this.state.form.name}
                                               onChange={e => this.change(e)}
                                               style={{color : "#fff"}}
                                               placeholder="Name" required="required" />
                                        <small className="form-error">{this.state.nameError}</small>
                                    </div>

                                    <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control"
                                               value={this.state.form.email}
                                               onChange={e => this.change(e)}
                                               style={{color : "#fff"}}
                                               placeholder="Email" required="required" />
                                        <small className="form-error">{this.state.emailError}</small>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" name="subject" id="subject" className="form-control"
                                               value={this.state.form.subject}
                                               onChange={e => this.change(e)}
                                               style={{color : "#fff"}}
                                               placeholder="Subject" required="required" />
                                        <small className="form-error">{this.state.subjectError}</small>
                                    </div>

                                    <div className="form-group">
                                        <textarea name="message" id="message" cols="30" rows="5"
                                                  className="form-control" placeholder="Message"
                                                  onChange={e => this.change(e)}
                                                  value={this.state.form.message}
                                                  style={{color : "#fff"}}
                                                  required="required"></textarea>
                                        <small className="form-error">{this.state.messageError}</small>
                                    </div>

                                    <button type="submit" name="submit" className="btn-custom" onClick={e => this.onSubmit(e)}>
                                        {load ? <img src={Ajaxloader} alt="" style={{width : "20px"}} /> : <span>
                                            <span><i className="fas fa-paper-plane"></i></span>
                                        <span> Send Message</span>
                                        </span>}
                                    </button>

                                </form>
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
                                            className="fas fa-envelope base-color"> </i> {this.props.sociales.gmail}</p>
                                    </div>
                                    <div className="item">
                                        <p className="font-w-700 mb-0">Skype: </p>
                                        <p className="mb-0"><i className="fab fab fa-skype base-color"> </i> {this.props.sociales.skype}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}