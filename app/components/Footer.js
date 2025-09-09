import { FaGithub, FaInstagram } from "react-icons/fa";
import '../styles/footer.css'; // Import file CSS footer

const Footer = () => {
  return (
    <footer className="footer">
      &copy; 2025 MyPortfolio. All rights reserved.
      <div className="footer-icons">
        <a 
          href="https://github.com/maulharun" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub size={16} />
        </a>
        <a 
          href="https://instagram.com/donirzki.m" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaInstagram size={16} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
