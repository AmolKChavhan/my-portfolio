import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";
import Contact from "../../sections/contact/Contact";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-left">
        <h2>Get in Touch</h2>
        <p>
          Mobile: <a href="tel:+1234567890">+91 7741084928</a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:amolkchavhan@gmail.com" aria-label="Email">
            amolkchavhan@gmail.com
          </a>
        </p>
      </div>

      <div className="footer-center">
        <Contact />
      </div>

      <div className="footer-right">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/amolkchavhan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/amolkchavhan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a href="mailto:amolkchavhan@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>
        &copy; {new Date().getFullYear()} Amol Chavhan. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
