import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Phone from '../../img/phone.png';
import Address from '../../img/address.png';
import Email from '../../img/email.png';
import './contact.css';
import { ThemeContext } from '../../context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_xvkyszx", "template_8q086nf", formRef.current, "nvVPere96yAOUYWYv")
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Got some feedback? Contact.
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91 6376735983
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            hardikjain40153@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Sagwara, Rajasthan, India
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Available for
                        opportunities if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input
                            required
                            style={{
                                backgroundColor: darkMode && "#222",
                                color: darkMode && "white",
                                border: darkMode && "none",
                                borderBottom: darkMode && "1px solid white"
                            }}
                            type="text"
                            placeholder="Name"
                            name="user_name"
                        />
                        <input
                            required
                            style={{
                                backgroundColor: darkMode && "#222",
                                color: darkMode && "white",
                                border: darkMode && "none",
                                borderBottom: darkMode && "1px solid white"
                            }}
                            type="text"
                            placeholder="Subject"
                            name="user_subject"
                        />
                        <input
                            required
                            style={{
                                backgroundColor: darkMode && "#222",
                                color: darkMode && "white",
                                border: darkMode && "none",
                                borderBottom: darkMode && "1px solid white"
                            }}
                            type="text"
                            placeholder="Email"
                            name="user_email"
                        />
                        <textarea
                            required
                            style={{
                                backgroundColor: darkMode && "#222",
                                color: darkMode && "white"
                            }}
                            placeholder='Message'
                            rows="5"
                            name="message" >
                        </textarea>
                        <button>Submit</button>
                        {done && <span className="c-desc-result"> Sent Successfully</span>}
                    </form>
                </div>
            </div>
            <div className="c-footer">
                <div className="c-copyright">
                    © Hardik Jain, 2022. All rights reserved.
                </div>
                <div className="social-container">

                    <a
                        style={{ color: darkMode ? "white" : "black" }}
                        href="https://github.com/HardikJain40153"
                        target="_blank"
                        rel="noreferrer"
                        className="github social">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a
                        style={{ color: darkMode ? "white" : "black" }}
                        href="https://www.linkedin.com/in/hardik-jain-a4a6301a0/"
                        target="_blank"
                        rel="noreferrer"
                        className="linkedin social">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a
                        style={{ color: darkMode ? "white" : "black" }}
                        href="https://www.facebook.com/profile.php?id=100011720527550"
                        target="_blank"
                        rel="noreferrer"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a
                        style={{ color: darkMode ? "white" : "black" }}
                        href="https://www.instagram.com/hardee_07/"
                        target="_blank"
                        rel="noreferrer"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a
                        style={{ color: darkMode ? "white" : "black" }}
                        href="https://twitter.com/HardikJ___07"
                        target="_blank"
                        rel="noreferrer"
                        className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Contact;