import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-content">
        <p>Designed and Developed by Amol Chavhan</p>
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
        <p>
          &copy; {new Date().getFullYear()} Amol Chavhan. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
