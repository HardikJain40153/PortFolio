import React from 'react';
import Phone from '../../img/phone.png';
import Address from '../../img/address.png';
import Email from '../../img/email.png';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const ContactView = ({ formRef, handleSubmit, done, darkMode }) => {
  return (
    <div className="c">
      <div className="c-bg" />
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Got some feedback? Contact.</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="phone" className="c-icon" />
              +91 6376735983
            </div>
            <div className="c-info-item">
              <img src={Email} alt="email" className="c-icon" />
              hardikjain40153@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="address" className="c-icon" />
              Bengaluru, Karnataka, India
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
              className="c-input"
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              required
              className="c-input"
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              required
              className="c-input"
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              required
              className="c-textarea"
              placeholder="Message"
              rows="5"
              name="message"
            />
            <button>Submit</button>
            {done && <span className="c-desc-result"> Sent Successfully</span>}
          </form>
        </div>
      </div>
      <div className="c-footer">
        <div className="c-copyright">Created by Hardik Jain, 2026</div>
        <div className="social-container">
          <a
            style={{ color: darkMode ? 'white' : 'black' }}
            href="https://github.com/HardikJain40153"
            target="_blank"
            rel="noreferrer"
            className="github social"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            style={{ color: darkMode ? 'white' : 'black' }}
            href="https://www.linkedin.com/in/hardik-jain-a4a6301a0/"
            target="_blank"
            rel="noreferrer"
            className="linkedin social"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            style={{ color: darkMode ? 'white' : 'black' }}
            href="https://www.facebook.com/profile.php?id=100011720527550"
            target="_blank"
            rel="noreferrer"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            style={{ color: darkMode ? 'white' : 'black' }}
            href="https://www.instagram.com/hardee_07/"
            target="_blank"
            rel="noreferrer"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            style={{ color: darkMode ? 'white' : 'black' }}
            href="https://twitter.com/HardikJ___07"
            target="_blank"
            rel="noreferrer"
            className="twitter social"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
