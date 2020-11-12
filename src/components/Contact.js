import React, { useState } from 'react';
//React-Router
import Axios from 'axios';
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';

const Contact = () => {

    const [state, setState] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleTextFields = (event) => {
        const { name, value } = event.target;
        setState({
            [event.target.name]: event.target.value
        })
    }

    const sendForm = () => {
        let messageObject = {
            // eslint-disable-next-line
            ['Full Name']: state.fullName,
            // eslint-disable-next-line
            ['Email Address']: state.email,
            // eslint-disable-next-line
            ['Contact']: state.phone,
            // eslint-disable-next-line
            ['Subject']: state.subject,
            // eslint-disable-next-line
            ['Message']: state.message
        }

        Axios.post(
            "https://formspree.io/xpzpoolq",
            messageObject,
            { headers: { "Accept": "application/json" } }
        )
            .then(function (response) {
                console.log(response);
                swal('Thank you for Contacting Us ! ')
                    .then(value => window.location.reload())
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            {/* <!-- Contact --> */}
            <section id="contact">

                <div className="content-box-md">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-6 mx-auto">

                                {/* <!-- Contact Left --> */}
                                <div id="contact-left">

                                    <div className="vertical-heading">
                                        <h5>Who We Are</h5>
                                        <h2>Get <br></br> In <strong>Touch</strong></h2>
                                    </div>
                                    <p>Please don't hesitate to get in contact! Feel free to leave your phone number or address, so we can get in touch as quickly as possible.</p>

                                    <div id="offices">

                                        <div className="row">

                                            <div className="col-md-6">

                                                <div className="office">
                                                    <h4>Pakistan</h4>
                                                    <ul className="office-details">
                                                        <li><i className="fa fa-mobile"></i><span>+(92) 302 2476286</span></li>
                                                        <li><i className="fa fa-envelope"></i><span>owaisiqbal1996@gmail.com</span></li>
                                                        <li><i className="fa fa-map-marker"></i><span>R-602, Block-17, F.B Area <br></br>Karachi, Pakistan.</span></li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div className="col-md-6">

                                                <div className="office">
                                                    <h4>Australia</h4>
                                                    <ul className="office-details">
                                                        <li><i className="fa fa-mobile"></i><span>+(88) 457 87 74 87</span></li>
                                                        <li><i className="fa fa-envelope"></i><span>support@my-web.com</span></li>
                                                        <li><i className="fa fa-map-marker"></i><span>507 Din Street Building 55
                                                        <br></br>Sydney, Australia.</span></li>
                                                    </ul>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <ul className="social-list">
                                        <li><NavLink to="/"><i className="fa fa-facebook"></i></NavLink></li>
                                        <li><NavLink to="/"><i className="fa fa-twitter"></i></NavLink></li>
                                        <li><NavLink to="/"><i className="fa fa-google-plus"></i></NavLink></li>
                                    </ul>

                                </div>

                            </div>
                            <div className="col-md-6 mx-auto">

                                {/* <!-- Contact Right --> */}
                                <div id="contact-right">

                                    <form>
                                        <h4>Send Message</h4>
                                        <p>Send us a message and we'll respond you as soon as possible.</p>

                                        <div className="row">

                                            <div className="col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="name" placeholder="Full Name" name="fullName" onChange={handleTextFields} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="email" placeholder="Email Address" name="email" onChange={handleTextFields} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="phone" placeholder="Contact" name="phone" onChange={handleTextFields} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="subject" placeholder="Subject" name="subject" onChange={handleTextFields} />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" id="message" placeholder="Message" name="message" onChange={handleTextFields}></textarea>
                                        </div>

                                        <div id="submit-btn">
                                            <NavLink className="btn btn-general btn-yellow" to="/" title="Submit" role="button" onClick={sendForm} >Submit</NavLink>
                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* <!-- Contact Ends --> */}
        </>
    );
}

export default Contact;
